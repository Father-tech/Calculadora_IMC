document.getElementById("botao").addEventListener('click',function calcular(){
    let a = document.getElementById('ialt')
    let p = document.getElementById('ipeso')
    let res = document.getElementById('res')

    var altvalor = Number(a.value)
    var alt = altvalor < 3 ? altvalor : altvalor / 100
    var peso = Number(p.value)
          
    var soma = peso / (alt*alt)

    
    if(a.value && p.value <= 0 ){
        alert('[ERRO] Faltam informações!')    
    }else if(soma <= 18.5 ){
        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}. Você está abaixo do peso ideal!`
    }else if(soma <= 24.9){
        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}. Você com o peso ideal (parabéns \u{1F642})!`
    }else if(soma <= 29.9){
        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}. Você está levemente acima do seu peso ideal!`
    }else if (soma <= 34.9){
        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}. Você está com obesidade de grau 1!`
    }else if(soma <= 39.9){
        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}. Você está com obesidade de grau 2 (severa)!`
    }else{
        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}. Você está com obesidade de gráu 3 (mórbida)!`
    }

})
