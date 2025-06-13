class Cart {
    #product
    constructor(product) {
        this.#product = product;
        this.listProduct = [];
    }

    get product() {
        return this.#product;
    }

    set product(productName) {
        this.#product = productName;
    }

    

    addProduct(productName) {
        this.listProduct.push(productName);
    }

    removeProduct(productName) {
      const index = this.listProduct.filter(p => p !== productName);

      if(index !== -1) {
        this.listProduct.splice(index, 1);
      }
    }

    listProducts() {
        return this.listProduct;
    }
}

const cart = new Cart();

cart.addProduct('Arroz');
cart.addProduct('Feijão');
cart.addProduct('Macarrão');

console.log(cart.listProducts());

cart.removeProduct('Feijão');

console.log(cart.listProducts()); 
