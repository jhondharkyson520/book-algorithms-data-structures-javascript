let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//inserir um elemento ao final do array:
numbers[numbers.length] = 10;
console.log(numbers);

//também é possivel adicionar elementos ao final do array usando o método push, 
//que inclusive se faz possivel adicionar mais de um elemento ao final do array

numbers.push(11);
numbers.push(12, 13);
console.log(numbers);

//inserindo elemento na primeira posição sem método unshift, somente com lógica:
Array.prototype.insertFirstPosition = function(value) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }

    this[0] = value;
}
numbers.insertFirstPosition(-1);
console.log(numbers);


