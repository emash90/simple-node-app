const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MONGO_PASSWORD, MONGO_USER, MONGO_IP, MONGO_PORT } = require('./config/config');


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


app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!')
})
app.get('/api', (req, res) => {
    res.send('api tab')
})