// FOR OF
//ELE CONSEGUE PERCORRER UM ARRAY OU UMA STRING ASSIM COMO OS OUTROS, MAS SEM A NECESSIDADE DE CAPTURAR O ÍNDICE EM UMA VARIÁVEL

const nomes = ['Eduardo', 'Romerito', 'Jefrey']

// Percorrendo o array com "for" clássico
for (let indices = 0; indices < nomes.length; indices++){
    console.log(nomes[indices])
}

// Percorrendo o array com "for in"
for (let indices in nomes){
    console.log(nomes[indices])
}

// Nesses dois casos, para acessar o valor do índice foi preciso que capturasse o índice em uma variável e chamasse o nome do array junto com o índice "nomes[indices]"
//Já com o "for of" isso nao é mais preciso

for(let valorDoIndice of nomes){
    console.log(valorDoIndice)
}
//OBS: Só funciona com elementos iteráveis(não funciona com objetos)