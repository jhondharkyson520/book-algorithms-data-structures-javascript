class BankAccount {
    #balance;
    constructor(balance = 0) {
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if(amount >= 0) {
            this.#balance += amount;
        } else {
            console.log('O valor de deposito deve ser maior que zero');            
        }
    }

    withdraw(amount) {
        if(amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
        } else if(amount <= 0){
            console.log('Valor invalido');             
        } else {
            console.log('Saldo insuficiente');                      
        }
    }
}

const myAccount = new BankAccount();

myAccount.deposit(100);
console.log(myAccount.balance);

myAccount.withdraw(50);
console.log(myAccount.balance);

myAccount.withdraw(50);
console.log(myAccount.balance);

myAccount.withdraw(100);
console.log(myAccount.balance);

//console.log(myAccount.#balance);
