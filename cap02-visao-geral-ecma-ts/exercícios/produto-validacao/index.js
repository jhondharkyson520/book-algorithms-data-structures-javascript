class Product {
    #name;
    #price;

    constructor(name, price) {
        this.#name = name;
        this.#price = price;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    set name(inputName) {
        this.#name = inputName;
    }

    set price(inputPrice) {
        if(inputPrice >= 0) {
            this.#price = inputPrice;
        } else {
            console.log('Preço inválido');            
        }
    }

    info() {
        return `Produto: ${this.name}, Preço: ${this.price}`;
    }
}

const p = new Product('Arroz', 10);
console.log(p.info());

p.name = 'Feijão';
p.price = 5;

console.log(p.info());

p.price = -10;
