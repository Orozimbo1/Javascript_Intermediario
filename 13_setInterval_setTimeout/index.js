// "SETINTERVAL " E "SETTIMEOUT"

function mostrarHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(mostrarHora())

// A função "setInterval" vai setar uma ação e de quanto em quanto tempo para ser executada, continuará sendo executada a menos que interrompa com a função "setTimeout" ou manualmente " 'ctrl' + 'alt' + 'M' "
const timer = setInterval(function() {
    console.log(mostrarHora())
}, 1000)

// A função "setTimeout" vai setar qual função e em quanto tempo ela será interrompida, só é executada uma vez
setTimeout(function() {
    clearInterval(timer)
}, 5000)

setTimeout(() => {
    console.log('Acabou a contagem')
}, 5000)