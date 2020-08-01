const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDatabase = require('./config/database')

//Setting up config.env file variables
dotenv.config({path : './config/config.env'})

//connecting to database
connectDatabase();

//importing router
const posts = require ('./routes/posts');

app.use(posts);


app.listen(port, () =>{
    console.log(`Server started on port ${port} in ${process.env.NODE_ENV} mode.`)
})

module.exports = app;
