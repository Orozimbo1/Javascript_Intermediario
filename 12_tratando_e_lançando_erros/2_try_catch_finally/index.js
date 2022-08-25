// "TRY" "CATCH" E "FINALLY"

function soma(x, y){
    if (typeof x !== 'number') return 'erro'
    if (typeof x !== 'number') return 'erro'
    return x + y
}

try{
    const x = 10
    const y = 3
    console.log(soma(x, y))
}catch(e){
    console.log(e)
}finally{ // Sempre será executado
    console.log('Sempre serei executado, dando certo ou não!!')
}