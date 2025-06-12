class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    deposit(value) {
        if(value > 0) {
            this.balance += value;
        } else {
            console.log('Para depositar o valor deve ser maior que zero');            
        }
    }

    withdraw(value) {
        if(this.balance > 0) {
            this.balance -= value;
        } else {
            console.log('Saldo insuficiente');           
        }
    }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.balance);

account.withdraw(50);
console.log(account.balance);

account.withdraw(50);
console.log(account.balance);

account.withdraw(50);
console.log(account.balance);
