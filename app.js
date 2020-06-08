const express = require('express');
const app = express();

const routes = require('./Config/routes');

routes(app);

module.exports = app;