// ESTRUTURA CONDICIONAL
/**
 * ENTRE 0 - 11 -> BOM DIA
 * ENTRE 12 - 17 -> BOA TARDE
 * ENTRE 18 - 23 -> BOA NOITE 
 * 
 * If pode ser usado sozinho.
 * Sempre que utilizar o "else" é preciso ter um "if" antes.
 * Pode ter quantos "else if" quiser na checagem, desde que venha depois de um "if"
 * Só pode ter um "else" na checagem, e ele não tem condição, só será executado quando nenhuma outra condição fora executada.
 * Pode usar condições sem "else if", apenas utilizando "if" e "else" 
 * A estrutura condicional, só precisa que uma delas retorne "TRUE", depois de encontrada todo o restante não será lido, mesmo que hajam outras.
 */

const tenhoGrana = false

//Se a condição "tenhoGrana" for "TRUE", retorna "Partiu praia!!"
if(tenhoGrana){
    console.log("Partiu praia!!")
}else {// Senão "FALSE", retorna "Vou comprar um miojo :´("
    console.log("Vou comprar um miojo :´(")
}

const hora = 33

// Se a variável "hora" for maior ou igual à 0 e hora for menor ou igual à 11, vai ser retornado "TRUE" e será executado o que está dentro da estrutura: "Bom dia!"
if (hora >= 0 && hora <= 11) { // Se
    console.log("Bom dia!")
} else if(hora > 11 && hora <= 17){ // Senão se 
    console.log("Boa tarde!")
} else if (hora > 17 && hora <= 24) { // Senão if
    console.log("Boa noite!")
} else {
    console.log("[ERROR] Hora inválida, digite um valor de 0 à 24.")
}