// ATRIBUIÇÃO VIA DESISTRUTURAÇÃO DE ARRAYS
// indice         0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [um, dois, tres, , ,seis] = numeros 

console.log(um, dois, tres,seis)

// índices          0          1          2     
// índices       0  1  2    3  4  5    6  7  8
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] 
// Para acessar o número "6"

const [,[,,six]] = arrays // Desistruturando o array
console.log(six)

console.log(arrays[1][2]) // Acessando via índice

const [lista1, lista2, lista3] = arrays
console.log(lista2[2]) // Desistrurando e usando o índice