// ESCREVA UMA FUNÇÃO QUE RECEBRE DOIS NÚMEROS E RETORNE O MAIOR DELES

// Forma mais verbosa
function maiorNumero(x, y){
    if(x > y) return x
    return y
}

//Forma menos verbosa
const maior = (x, y) => x > y ? x : y

console.log(maiorNumero(23, 7))
console.log(maior(23, 7))