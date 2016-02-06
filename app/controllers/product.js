module.exports = function(app) {
    var Product = app.models.product;
    console.log(Product);

    this.find = function(req, res) {
        console.log("Getting all users");
        Product.findAll(products => res.send(products.toJSON()));
    };

    return this;
};