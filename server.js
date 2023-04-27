const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');
let RedisStore = require('connect-redis')(session);




const { MONGO_PASSWORD, MONGO_USER, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT } = require('./config/config');


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
        maxAge: 30000
    }
}));

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!')
})
app.use('/api/v1/auth', require('./routes/authRoutes'));
