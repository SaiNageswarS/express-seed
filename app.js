var express = require('express');
var app = express();
var morgan = require('morgan');

var config = require('./config/config.json');

//initialize app
app.logger = require('./init/logger');
app.use(morgan('combined'));

//initialize db
var dbConfig = require('./config/data-config.json');
var knex = require('knex')(dbConfig);

app.db = knex;

//initialize mvc
var consign = require('consign');

consign({cwd: 'app'})
    .include('models')
    .include('controllers')
    .include('routes')
    .into(app);

app.listen(config.port, function() {
    app.logger.info("Listening on port " + config.port);
});



