function expSoma(num) {
    if (num == 1) {
        return 1;
    }else{
        return expSoma(num - 1) + (2*num - 1);
    }
        
}

var num = parseInt(prompt("Informe um número inteiro positivo: "));
alert(`${num}² = ${expSoma(num)}`);