const express = require('express');
const bodyP = require('body-parser');

const app = express();
const port3002 = 3002;

var jsonParser = bodyP.json();
var exphbs = require('express-handlebars');
var mysql = require('mysql');