// const data = new Date(0) //01/01/1970 Tempo unix ou epoca unix
// const data = new Date(2019, 3, 16) // Ano, mês, dia, hora, minuto, segundo milisegundos
const data = new Date('2022-08-21 15:20:55:678') // Ano-mês-dia hora:minuto:segundo:milisegundos
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Milisegundo', data.getMilliseconds())
console.log('Dia da semana', data.getDay())
console.log(data.toString())
console.log(Date.now())// Passa a hora atual em milisegundos

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${mes}:${seg}`
}

const dataCerta = new Date()
const dataBrasil = formataData(dataCerta)
console.log(dataBrasil)