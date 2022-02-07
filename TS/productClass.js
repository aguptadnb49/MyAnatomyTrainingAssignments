var Product = /** @class */ (function () {
    function Product(id, name, desc, cost) {
        this.cost = cost;
        this.productDescription = desc;
        this.productId = id;
        this.productName = name;
    }
    Product.prototype.display = function () {
        console.log("Name: ".concat(this.productName));
        console.log("ID: ".concat(this.productId));
        console.log("Description: ".concat(this.productDescription));
        console.log("Cost: ".concat(this.cost));
    };
    return Product;
}());
var product1 = new Product(2201, 'Marie', 'A biscuit', 234);
product1.display();
