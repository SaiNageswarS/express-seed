module.exports = function(app) {
    var bookshelf = require('bookshelf')(app.db);

    var Product = bookshelf.Model.extend({ tableName : 'product'});

    this.findAll = function(next) {
        Product.fetchAll().then(next);
    };
    return this;
};