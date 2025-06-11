import { Book } from "../POO-Com-Classes/index.js";

class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology() {
        console.log('Tecnologia método: '+ this.technology);        
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
console.log('Titulo novo: ', jsBook.title);
jsBook.printTechnology();
