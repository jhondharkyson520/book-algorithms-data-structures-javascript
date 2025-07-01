let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//inserir um elemento ao final do array:
numbers[numbers.length] = 10;
console.log('Metodo length usado para inserir elemento no final do array: numbers[numbers.length] = 10;', numbers);

//também é possivel adicionar elementos ao final do array usando o método push, 
//que inclusive se faz possivel adicionar mais de um elemento ao final do array

numbers.push(11);
numbers.push(12, 13);
console.log('Metodo push para também inserir elementos ao final do array: numbers.push(12, 13);', numbers);

//inserindo elemento na primeira posição sem método unshift, somente com lógica:
Array.prototype.insertFirstPosition = function(value) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }

    this[0] = value;
}
numbers.insertFirstPosition(-1);
console.log('Metodo disponivel em todas instancias de array, insertFirstPosition: numbers.insertFirstPosition(-1);', numbers);

//Agora com método unshift
numbers.unshift(50);
numbers.unshift(53,80);
console.log('Metodo unshift, para inserir elementos na primeira posição do array: numbers.unshift(53,80);', numbers);

//Removendo elemento final do array
numbers.pop();
console.log('Metodo pop para remover elemento do final do array: numbers.pop();', numbers);

//Removendo um elemento da primeira posição

Array.prototype.reIndex = function(myArray) { 
    const newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined) {
            //console.log(myArray[i]);
            newArray.push(myArray[i]);            
        }
    }

    return newArray;
}

// Remove a primeira posição manualmente e executa reIndex

Array.prototype.removeFirstPosition = function() {
    for(let i = 0; i< this.length; i++) {
        this[i] = this[i + 1];
    }

    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

//resultado: e lembrando que o correto em projetos de verdade é usar o método shift use esse acima somente para fins de estudo.
console.log('Array com primeiro elemento removido atraves do prototype e logica', numbers);

//Removendo da primeira posição com método shift() (sempre use o método shift())
numbers.shift();
console.log('Removendo da primeira posição com método shift(): ', numbers);

//Método splice numbers.splice(0, 2)// primeiro elemento é o indice que se inicia a adição ou remoção
// o segundo elemento É A QUANTIDADE de elementos a serem removidos por exemplo:
numbers.splice(0, 2);
console.log('Removendo indices: numbers.splice(0, 2); ', numbers);

//támbem é possivel adicionar itens: numbers.splice(0,0, -2, -1)
numbers.splice(0,0, -2, -1);
console.log();
console.log('adicionando indices: numbers.splice(0,0, -2, -1); ', numbers);
