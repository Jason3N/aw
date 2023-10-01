const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB has been connected")
})

app.use(cors())
app.use(bodyParser.json())

const movieRouter = require('./routes/movie.js')
app.use('/movie', movieRouter);

app.listen(port, () => {
    console.log(`port is listening to ${port}`);
});

