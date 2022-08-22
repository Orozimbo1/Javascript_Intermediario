const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validacao()
})

function criarParagrafo () {
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criarParagrafo()

    if (isValid) p.classList.add('paragrafo-resultado-TRUE')
    if (!isValid) p.classList.add('paragrafo-resultado-FALSE')

    p.innerHTML = msg
    resultado.appendChild(p)
}

function validacao() {
    const inputPeso = document.getElementById('peso')
    const inputAltura = document.getElementById('altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if (!peso || peso === 0){
        setResultado(`Peso inválido`, false) 
        return  
    }   
    if (!altura || altura === 0) {
        setResultado(`Altura inválida`, false)
        return
    } 
    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true)
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso ideal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II', 'obesidade mórbida']
    if (imc >= 40) return nivel[5]
    if (imc >= 35) return nivel[4]
    if (imc >= 30) return nivel[3]
    if (imc >= 25) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

