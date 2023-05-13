const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require("ioredis");
let RedisStore = require('connect-redis')(session);
const cors = require('cors');




const { MONGO_PASSWORD, MONGO_USER, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require('./config/config');


let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
});

const port = process.env.PORT || 5000

const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

const connect_with_retry = () => {
    return mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => {
            console.log(err);
            setTimeout(connect_with_retry, 5000);
        });
};


connect_with_retry();

app.enable('trust proxy');
app.use(cors({
    // origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
    origin: '*',
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 3000000
    }
}));

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!')
    console.log('Ye load balancer workeing');
})
app.use('/api/v1/auth', require('./routes/authRoutes'));
