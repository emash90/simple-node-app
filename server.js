const express = require('express');
const mongoose = require('mongoose');
const app = express();


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})


app.get('/', (req, res) => {
    res.send('Hello World!!!!!!')
})
app.get('/api', (req, res) => {
    res.send('api tab')
})