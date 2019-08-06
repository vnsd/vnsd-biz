/*
 * Copyright (c) 2019 by Bank Lombard Odier & Co Ltd, Geneva, Switzerland. This software is subject
 * to copyright protection under the laws of Switzerland and other countries. ALL RIGHTS RESERVED.
 *
 */

var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');

var db = require('./config/database');
//startup routes
var startupsRoutes = require('./api/startup/startups.routes');
var app = express();
const port = process.env.PORT || 5000;

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// use express router
app.use('/startup', router);
//call startups routing
startupsRoutes(router);

// intialise server
app.listen(port, () => {
    console.log('App running on port ${port}.');
})
module.exports = app;