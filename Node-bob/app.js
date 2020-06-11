// Created the express application
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

// Loaded in our routes file
const routes = require('./Config/routes')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())
app.use(bodyParser.json())

routes(app)

// Makes the app available elsewhere
module.exports = app
