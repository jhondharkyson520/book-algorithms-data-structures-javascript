const zero = 0;
const positiveNumbers = [1, 2, 3, 5, 6];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log('Os arrays concatenados são: ', numbers);

const isEven = x => x % 2 === 0;
//itera sobre os elementos até que a função devolva false
numbers.every(isEven);
console.log('Every: ', numbers.every(isEven));
//itera sobre os elementos até que a função devolva true
numbers.some(isEven);
console.log('Some: ', numbers.some(isEven));

//iterando com forEach
numbers.forEach(x => console.log(x % 2 === 0));

//mapeia todos os resultados de isEven para o novo array myMap
const myMap = numbers.map(isEven);
console.log('Array myMap: ', myMap);

//retorna um novo array com os elementos que devolveram true
const evenNumbers = numbers.filter(isEven);
console.log('Elementos true com filter: ', evenNumbers);

// o método reduce recebe uma função com os seguintes métodos: previousValue, currentValue, index e array
//o index e array são opcionais
//abaixo um exemplo para somar todos os elementos de um array:
numbers.reduce((previous, current) => previous + current);
console.log('A saída do método Reduce usado para somar o array é: ', numbers.reduce((previous, current) => previous + current));
