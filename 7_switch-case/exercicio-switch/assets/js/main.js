const h1 = document.querySelector('.container h1')
const data = new Date()

function getDiaDaSemanaTexto(diaDaSemana){
    let diaDaSemanaTexto
    switch(diaDaSemana) {
        case 0 :
            diaDaSemanaTexto = 'Domingo'
            return diaDaSemanaTexto  
        case 1 :
            diaDaSemanaTexto = 'Segunda-feira'
            return diaDaSemanaTexto 
        case 2 :
            diaDaSemanaTexto = 'Terça-feira'
            return diaDaSemanaTexto 
        case 3 :
            diaDaSemanaTexto = 'Quarta-feira'
            return diaDaSemanaTexto 
        case 4 :
            diaDaSemanaTexto = 'Quinta-feira'
            return diaDaSemanaTexto 
        case 5 :
            diaDaSemanaTexto = 'Sexta-feira'
            return diaDaSemanaTexto 
        case 6 :
            diaDaSemanaTexto = 'Sábado'
            return diaDaSemanaTexto 
        default: // Caso não tenha nenhuma das opções, funciona como o "else" 
            diaDaSemanaTexto = 'Dia inválido'
    }
}

function getNomeMes(numMes){
    let nomeMes
    switch(numMes) {
        case 0 :
            nomeMes = 'janeiro'
            return nomeMes  
        case 1 :
            nomeMes = 'fevereiro'
            return nomeMes 
        case 2 :
            nomeMes = 'março'
            return nomeMes 
        case 3 :
            nomeMes = 'abril'
            return nomeMes 
        case 4 :
            nomeMes = 'maio'
            return nomeMes 
        case 5 :
            nomeMes = 'junho'
            return nomeMes 
        case 6 :
            nomeMes = 'julho'
            return nomeMes 
        case 7 :
            nomeMes = 'agosto'
            return nomeMes
        case 8 :
            nomeMes = 'setembro'
            return nomeMes
        case 9 :
            nomeMes = 'outubro'
            return nomeMes
        case 10 :
            nomeMes = 'novembro'
            return nomeMes
        case 11 :
            nomeMes = 'dezembro'
            return nomeMes
        default: // Caso não tenha nenhuma das opções, funciona como o "else" 
        nomeMes = 'Mês inválido'
    }
}

function zeroAEsquerda(num) {
    return num > 10 ? num : `0${num}`
}

function criarData(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()
    const numeroDia = data.getDate()
    const ano = data.getFullYear()
    const hora = `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`

    const nomeDia = getDiaDaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)
    return `${nomeDia}, ${numeroDia} de ${nomeMes} de ${ano} ${hora}`
}

h1.innerHTML = criarData(data)

// Forma abreviada de formar uma data só usando Date()
const h2 = document.querySelector('.container h2')
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h2.innerHTML = data.toLocaleString('pt-BR', opcoes)

//Forma de formar uma data usando arrays

const h3 = document.querySelector('.container h3')

function getNomeDoMes(numMes){
    let nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return nomeMes[numMes]
}

function getNomeDoDia(diaDaSemana){
    let nomeDia = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return nomeDia[diaDaSemana]
}

function criarDatas(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()
    const numeroDia = data.getDate()
    const ano = data.getFullYear()
    const hora = `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`

    const nomeDia = getNomeDoDia(diaSemana)
    const nomeMes = getNomeDoMes(numeroMes)
    return `${nomeDia}, ${numeroDia} de ${nomeMes} de ${ano} ${hora}`
}

h3.innerHTML = (criarDatas(data))