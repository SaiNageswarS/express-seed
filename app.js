var express = require('express'),
morgan = require('morgan'),
bodyParser = require('body-parser');

var config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');

//initialize app
var app = express();

app.logger = require('./init/logger');
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initialize db
var knex = require('knex')(config.db);

app.db = knex;

//initialize mvc
var consign = require('consign');

consign({cwd: 'app'})
    .include('models')
    .include('controllers')
    .include('auth')
    .include('routes')
    .into(app);

module.exports = app;


