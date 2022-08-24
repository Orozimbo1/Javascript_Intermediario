// FOR IN
//LÊ INDÍCES DE UM ARRAY OU CHAVE DE OBJETOS

// indices        0        1      2
const frutas = ['Pêra', 'Maçã', 'Uva']

// Percorrendo o array com "for" clássico

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

// Percorrendo o array com "for in"

for (let indices in frutas){
    console.log(frutas[indices])
}

const pessoas = {
    nome: 'Joao',
    sobrenome: 'Santos',
    idade: 52
}

// Percorrendo o objeto com "for in"

for (let chave in pessoas){
    console.log(chave, pessoas[chave])
}