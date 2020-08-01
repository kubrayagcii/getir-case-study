const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connectDatabase = require('./config/database')

connectDatabase();

//importing router
const posts = require ('./routes/posts');

app.use('/api/v1',posts);

module.exports = app;
