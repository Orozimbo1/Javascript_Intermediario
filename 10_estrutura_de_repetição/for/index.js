/**
 * ESTRUTURA DE REPETIÇÃO(LOOP) FOR
 * A estrutura for precisa de 3 parâmetros.
 * 1° Setar uma variável que seja o inicio do começo do loop
 * 2° A condição verdadeira que faça o loop funcionar até que seja falsa
 * 3° O passo
 */

//    Início i = 0  |  Até que i seja menor ou igual à 5  |   Passo i + 1
for (  let i = 0;                   i <= 5;                      i++     ){
    console.log(`Linha ${i}`)
}
// "i" começa com 0. Enquanto ele for menor ou igual à 5("i <= 5"), essa condição retornará verdadeiro dando sequência ao código, que irá ser incremenado neste caso("i++") de um em um, executando o bloco de código que se enconta dentro do "for" ->  "console.log(`Linha ${i}`)"

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Pár' : 'Ímpar'
    console.log(i, par)
}

//Percorrendo array

const frutas = ['Maçã', 'Pêra', 'Banana', 'Limão', 'Laranja', 'Goiaba']

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}:`, frutas[i])
}