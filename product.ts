class Product {
    name:string;
    price: number;
    pId: number;
    inCart = false;
    isOrdered = false;

    constructor(name: string, price:number, pid:number){
        this.name = name;
        this.price = price;
        this.pId = pid;
    }

    addToCart():void{
        this.inCart = true;
    }

    buyProduct():string{
        if(this.inCart){
            return `Product ${this.name} is ordered in ${this.price}`
        } else{
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