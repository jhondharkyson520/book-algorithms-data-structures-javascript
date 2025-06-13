class Counter {
    #count;

    constructor(count = 0) {
        this.#count = count;
    }

    get count() {
        return this.#count;
    }

    increment() {
       this.#count++;
    }

    decrement() {
       this.#count--;
    }

    reset() {
       this.#count = 0;
    }

    value() {
        return this.count;
    }
}

const c = new Counter();
console.log(c.value());

c.increment();
console.log(c.value());

c.increment();
console.log(c.value());

c.increment();
console.log(c.value());


c.decrement();
console.log(c.value());

c.reset();
console.log(c.value());

