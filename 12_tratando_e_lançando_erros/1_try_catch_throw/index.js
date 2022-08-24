// "TRY" "CATCH" E "THROW"

try { // Tente fazer isso:
    console.log(nada) 
} catch(e){ // Se não der faça isso:
    console.log('[ERRO]') // A variável "nada" não existe, então essa linha será executada. 
}

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números') // O "throw" vai capturar o erro mostrando o arquivo, linha e coluna onde aconteceu o erro, para ser tratado no catch
        // É usado quando se quer forçar um erro, sendo assim nada abaixo dele dentro do bloco será executado. 
    }
    return x + y
}

try {
    console.log(soma(1, 4)) // Vai funcionar
    console.log(soma(1, 'jh')) // Vai dar erro
} catch(e) {
    // console.log(e) // Não é uma boa prática por ffins de seurança mostrar o tipo do erro para o usuário final, ao invés disso formate uma mensagem só para indicar que deu um erro
    console.log('Por favor, digite apenas números.') 
}