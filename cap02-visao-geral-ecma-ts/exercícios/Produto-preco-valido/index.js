export class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {

        if(value > 0) {
            this._price = value;
        } else {
            console.log('O valor do preço deve ser maior que zero');            
        }
        
    }
}

const p = new Product('Smartphone', 100);
p.price = -50;
p.price = 80;
console.log(p.price);
