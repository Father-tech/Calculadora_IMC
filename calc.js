 function calcular(){
    let a = document.getElementById('ialt')
    let p = document.getElementById('ipeso')
    let res = document.getElementById('res')
    
    if(a.value && p.value > 0 ){
        let altvalor = Number(a.value)
        let alt = altvalor < 3 ? altvalor : altvalor / 100
        let peso = Number(p.value)
          
        let soma = peso / (alt*alt)

        res.innerHTML = `Seu IMC é ${soma.toFixed(2)}`
    }else {
        alert('[ERRO] Faltam informações!')
    }

 }