var v1 = document.getElementById("valor1")
var v2 = document.getElementById("valor2")
var v3 = document.getElementById("v1calc2")
var v4 = document.getElementById("v2calc2")
var res = document.getElementById("result")

function resultado(){
    if (v3.value == 0 && v4.value == 0 && v1.value != 0 && v2.value !=0){
        var calc = v2.value / 100
        var r = calc * v1.value
        res.innerHTML=`${v1.value}% de ${v2.value} é igual a ${r.toFixed(2)}`
        res.style.background='red'
        res.style.margin='30px'
    }

    else if(v1.value == 0 && v2.value == 0 && v3.value != 0 && v4.value != 0) {
        var calc3 = v3.value / v4.value
        var resultcont = calc3 * 100
        res.innerHTML=`O valor ${v3.value} representa ${resultcont.toFixed(2)} % de ${v4.value}`
        res.style.background='red'
        res.style.margin='30px'
    }

    else if(v1.value == 0 && v2.value == 0 && v3.value == 0 && v4.value ==0) {
        window.alert('[ERRO] é necessario preencher as informações !')
    }

    else if(v1.value != 0 && v2.value != 0 && v3.value != 0 && v4.value !=0 && v3.value != 0 && v4.value != 0){
        window.alert('[ERRO] Não é possivel calcular todos os valores ao mesmo tempo, preencha apenas uma opção de calculo !')

    }

    
}

function limpar(){
    v1.value = ''
    v2.value = ''
    v3.value = ''
    v4.value = ''
    res.innerHTML = ''
}