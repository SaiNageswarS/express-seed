var app = require('./app');

var config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');
app.listen(config.port, function() {
    app.logger.info("Listening on port " + config.port);
});