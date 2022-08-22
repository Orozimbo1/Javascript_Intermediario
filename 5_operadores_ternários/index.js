/**
 * OPEADORES TERNÁRIOS
 * 
 * ? -> VALOR PARA VERDADEIRO
 * : -> VALOR PARA FALSO
 */

const pontuacaoUsuario = 500

//Com "else" e "if"
if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
}else {
    console.log('Usuário Normal')
}

//Com operadores ternários
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuario VIP' : 'Usuario Normal'
console.log(nivelUsuario)