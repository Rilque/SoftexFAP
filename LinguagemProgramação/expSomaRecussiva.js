function hello(nome) {
    window.alert("Oi" + nome);
}

function expSomatorio(n) {

if (n === 1){
    return 1;
}else {
    return expSomaRec(n-1) + (2*n - 1); //função recursiva vai chega no critério de parada e depois volta para o problema principal
}

}

var n, res;

var pessoa = prompt('Informe seu nome:');

hello(pessoa);

n = parseInt(prompt("Informe um inteiro positivo: "));

if (n > 0) {
    res = expSomatorio(n);
    console.log(`${n}² = ${res}`);
} else {
    console.log("Número inválido!");
}