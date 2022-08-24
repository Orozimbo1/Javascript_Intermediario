// "WHILE" E "DO WHILE"

let i = 0
//   Condição
while(i <= 5){
    console.log(i) // Ação
    i++ // Incrementação
}

// Função que gera um numero aleatório
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

// Setando os parâmetros para a função
const min = 0
const max = 10
let rand = 0

// Sorteando o número
while (rand !== 5){ // Enquanto número for diferente de 5 faça:
    rand = random(min, max)
    console.log(rand)
}

console.log('###############')

do { // Faça :
  rand = random(min, max)
  console.log(rand)
} while(rand !== 5) // Enquanto número for diferente de 5