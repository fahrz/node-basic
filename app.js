const express   = require('express');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser');
const routes    = require('./routes/index');

// create express app
const app       = express();

// handle routes
app.use('/', routes);

module.exports = app;