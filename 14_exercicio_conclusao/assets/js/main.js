// CRIAR UMA LISTA DE TAREFA
const inputTarefa = document.querySelector('.inputTarefa')
const adicionar = document.querySelector('.adicionar')
const lista = document.querySelector('.lista')

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) 
    validaInput()
})

function validaInput(){
    if (!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
    limpaInput()
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criarLi(){
    const li = document.createElement('li')
    return li
}

function criarBotaoApagar(li){
    li.innerHTML += ' '
    const botaoApagar = document.createElement("button")
    botaoApagar.innerHTML = "Apagar"
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criarTarefa(textoInput){
    const li = criarLi()
    li.innerHTML = textoInput
    lista.appendChild(li)
    limpaInput()
    criarBotaoApagar(li)
}

adicionar.addEventListener('click', () => {
    validaInput()
    limpaInput()
})

document.addEventListener('click', (e) => {
    const el = e.target
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        inputTarefa.focus()
    }
})
