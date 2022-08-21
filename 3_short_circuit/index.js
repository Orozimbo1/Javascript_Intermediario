/**
 * VALORES AVALIADOS EM FALSOS NO JS (FALSY)
 * false
 * 0
 * ' ', " ", ` `
 * null / undefined
 * NaN
 * QUALQUER COISA QUE NÃO SEJA UM VALOR "FALSY" É TIDO COMO VERDADEIRO
 */

console.log('Luiz' && 'Maria') // Nao existe nenhum valor "FALSY" entao o JS vai retornar o último valor checado, "Maria".

console.log("Luiz" && null && "Maria") // "null" é um valor "FALSY", entao a partir dele o JS não lerá os próximos valores e retornará o valor "FALSY" encontrado, nesse caso "null". Isso se chama "curto-circuito" ou "short-circuit", significa que se a expressão que for validada, fizer o uso do operador lógico "&&", e tiver apenas um valor que retorne "false", o JS não se dará o trabalho de validar os outros argumentos.

//O mesmo acontece com o operador ||, só é preciso que um valor seja verdadeiro para que a expressão seja verdadeira, assim que o JS encontrar esse valor não lerá nenhum outro e retornará o mesmo.

console.log(null || " " || 0 || 'João' || 52 || true) // O valor retornado será "João", mesmo que os valores seguintes sejam verdadeiros, não serão lidos.