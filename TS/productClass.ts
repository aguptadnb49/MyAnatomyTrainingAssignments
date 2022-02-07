class Product{
    productId:number;
    productName:string;
    productDescription:string;
    cost:number;

    constructor(id,name,desc,cost){
        this.cost=cost;
        this.productDescription=desc;
        this.productId=id;
        this.productName=name;
    }

    display(){
        console.log(`Name: ${this.productName}`);
        console.log(`ID: ${this.productId}`);
        console.log(`Description: ${this.productDescription}`);
        console.log(`Cost: ${this.cost}`);
    }
}

let product1=new Product(2201,'Marie','A biscuit',234);
product1.display();