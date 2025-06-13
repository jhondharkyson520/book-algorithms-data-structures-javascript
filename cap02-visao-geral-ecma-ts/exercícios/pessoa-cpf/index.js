class Person {
    #cpf;
    constructor(name, cpf) {
        this._name = name;
        this.#cpf = cpf;
    }

    get name() {
        return this._name;
    }

    set name(inputName) {
        this._name = inputName;
    }

    get cpf() {
        return this.#cpf;
    }

    showInfo() {
        return `Nome: ${this.name}, CPF: ${this.cpf}`;
    }
}

const p = new Person('Jhon', '123.456.789-10');
console.log(p.showInfo());
