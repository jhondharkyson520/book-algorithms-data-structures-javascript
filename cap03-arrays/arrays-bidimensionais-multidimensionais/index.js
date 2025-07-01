let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

//os mesmos códigos também podem ser escritos assim:
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

//assim formamos um array de arrays, possuindo duas linhas onde cada uma representa um dia e cada coluna representa a temperatura de cada hora do dia

//iterando pelos elementos de arrays bidimensionais
//se quisermos ver a saida da matriz podemos criar uma funçãi generica para fazer o log
function printMatrix(myMatrix) {
    for(let i = 0; i < myMatrix.length; i++) {
        for(let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);            
        }
    }
}

printMatrix(averageTemp);
console.table(averageTemp);

const matrix3x3x3 = [];
for(let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []; //precisamos inicializar cada array
    for(let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = []; //inicializando o array
        for(let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
            console.log('inicializando Matriz: ', matrix3x3x3[i][j][z]);
        }
    }
}

//para exibir o conteudo da matrix:

for(let i = 0; i < matrix3x3x3.length; i++) {
    for(let j = 0; j < matrix3x3x3[i].length; j++) {
        for(let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);            
        }
    }
}

console.table(matrix3x3x3);
