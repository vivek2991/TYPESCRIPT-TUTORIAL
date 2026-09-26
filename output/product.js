class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `Product ${this.name} is ordered in ${this.price}`;
        }
        else {
            return `No Products in Cart`;
        }
    }
}
var product = new Product('iPhone', 50000, 32);
product.addToCart();
console.log(product.buyProduct());
var product = new Product('Motorola', 80000, 101);
product.addToCart();
console.log(product.buyProduct());
export {};
