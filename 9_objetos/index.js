// ATRIBUIÇÃO VIA DESISTRUTURAÇÃO DE OBJETOS
const pessoa = {
    nome: 'Joao',
    sobrenome: 'Oliveira',
    idade: 58,
    endereco: {
        rua: 'Av Brasil',
        numero: '567'
    }
}

console.log(pessoa.nome)

const { nome, idade } = pessoa //O JS vai buscar dentro do objeto as chaves que correspondam com "nome" e "idade" e atribuilas o seu valor.
const { sobrenome: lastName } = pessoa //O JS vai buscar dentro do objeto o valor que corresponda com a chave informada "sobrenome:" e atribui-lo à variável criada "lastName".
const { CEP = 'Não existe' } = pessoa // O JS vai buscar dentro do objeto as chaves que correspondam com "CEP" e atribuilas o seu valor, caso não encontre irá retornar a string "Não existe".

console.log(nome, lastName, idade, CEP)

const { endereco: { rua, numero }, endereco } = pessoa

console.log(endereco)//O objeto endereco completo endereco: {rua: '',numero: ''}
console.log(rua, numero)// Desistruturação do objeto endereco
