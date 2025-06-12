class Media {
    constructor(title, year) {
        this._title = title;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        this._title = value;
    }

    set year(value) {
        this._year = value;
    }

    get info() {
        return `O filme: ${this.title} é do ano: ${this.year}`;
    }
}

class Movie extends Media {
    constructor(title, year, director){
        super(title, year);
        this._director = director;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }

    get fullInfo() {
        return `O filme: ${this.title} é do ano: ${this.year} e tem ${this.director} como diretor.`;
    }
}

let film = new Movie('O Senhor dos Anéis', 2001, 'Peter Jackson');
console.log(film.fullInfo);
console.log(film.info);

