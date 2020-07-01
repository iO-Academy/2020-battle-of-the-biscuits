// Created the express application
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// Loaded in our routes file
const routes = require('./Config/routes')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

routes(app)

// Makes the app available elsewhere
module.exports = app
