const data = new Date()
const diaDaSemana = data.getDay()
let diaDaSemanaTexto

//Usando o "if", "else if" e "else"
// if (diaDaSemana === 0){
//     diaDaSemanaTexto = 'Domingo'
// } else if (diaDaSemana === 1){
//     diaDaSemanaTexto = 'Segunda'
// } else if (diaDaSemana === 2){
//     diaDaSemanaTexto = 'Terça'
// } else if (diaDaSemana === 3){
//     diaDaSemanaTexto = 'Quarta'
// } else if (diaDaSemana === 4){
//     diaDaSemanaTexto = 'Quinta'
// } else if (diaDaSemana === 5){
//     diaDaSemanaTexto = 'Sexta'
// } else if (diaDaSemana === 6){
//     diaDaSemanaTexto = 'Sábado'
// } else {
//     diaDaSemanaTexto = 'Dia inválido'
// }

//Usando "switch case"
switch(diaDaSemana) {
    case 0 :
        diaDaSemanaTexto = 'Domingo'
        break  
    case 1 :
        diaDaSemanaTexto = 'Segunda'
        break 
    case 2 :
        diaDaSemanaTexto = 'Terça'
        break 
    case 3 :
        diaDaSemanaTexto = 'Quarta'
        break 
    case 4 :
        diaDaSemanaTexto = 'Quinta'
        break 
    case 5 :
        diaDaSemanaTexto = 'Sexta'
        break 
    case 6 :
        diaDaSemanaTexto = 'Sábado'
        break 
    default: // Caso não tenha nenhuma das opções, funciona como o "else" 
        diaDaSemanaTexto = 'Dia inválido'
}

console.log(diaDaSemana, diaDaSemanaTexto)