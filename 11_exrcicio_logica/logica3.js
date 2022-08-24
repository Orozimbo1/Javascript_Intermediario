/**
 * ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNE O SEGUINTE:
 * NÚMERO É DIVISÍVEL POR 3 -> "Fiiz"
 * NÚMERO É DIVISÍVEL POR 5 -> "Buuz"
 * NÚMERO É DIVISÍVEL POR 3 E POR 5 -> "FiizBuuz"
 * NUMERO NÃO E DIVISÍVEL POR 3 NEM POR 5 -> RETORNA O PRÓPRIO NÚMERO
 * CHECAR SE O NÚMERO É REALMENTE UM NÚMERO -> RETORNA O PRÓPRIO NÚMERO
 * USE A FUNÇÃO COM NÚMEROS DE 0 ATÉ 100
 */
const min = 0
const max = 100
const n = random(min, max)

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

function fiizBuuz(n){
    if (typeof n !== 'number') return n
    if(n % 3 === 0 && n % 5 === 0) return 'FiizBuuz'
    if (n % 3 === 0 ) return 'Fiiz'
    if (n / 5 === 0) return 'Buuz'
    return n
}

console.log(fiizBuuz(N))