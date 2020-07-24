const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connectDatabase = require('./config/database')

//Setting up config.env file variables
dotenv.config({path : './config/config.env'})


//connecting to database
connectDatabase();

//importing router
const posts = require ('./routes/posts');

app.use('/api/v1',posts);


app.listen(PORT, () =>{
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

module.exports = app;