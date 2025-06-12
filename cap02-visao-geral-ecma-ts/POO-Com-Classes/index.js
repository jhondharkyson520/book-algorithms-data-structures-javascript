console.log("Hello world");

export class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log('isbn: ', this.isbn);        
    }
}

let book = new Book('title', 'pag', 'isbn');
console.log('title primario: ', book.title);
book.title = 'new title: ';
console.log('New title primario: ', book.title);
