class Car {
    constructor(brand, model, year) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }

    get brand() {
        return this._brand;
    }

    get model() {
        return this._model;
    }

    get year() {
        return this._year;
    }

    set brand(value) {
        if(value.length > 0) {
            this._brand = value;
        } else {
            console.log('Digite a marca do carro');            
        }
    }

    set model(value) {
        if(value.length > 0) {
            this._model = value;
        } else {
            console.log('Digite a modelo do carro');            
        }
    }

    set year(value) {
        if(value > 0) {
            this._year = value;
        } else {
            console.log('Digite o ano do carro');            
        }
    }

    get status() {
        return `Carro: [${this._brand}] [${this._model}] - Ano: [${this._year}]`;
    }

    update(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let car = new Car('Toyota', 'Corola', 2020);
car.brand = 'Honda';
console.log(car.status);

car.update('Honda', 'Civic', 2022);
console.log(car.status);
