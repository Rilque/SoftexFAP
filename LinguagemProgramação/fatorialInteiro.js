function fatorial(n) {
    if (n == 1) {
        return 1;
    }else {
        return fatorial(n-1) * n;
    }
}

var n = parseInt(prompt("Informe um número inteiro positivo: "));

if (n > 0) {
    alert (`${n}! = ${fatorial(n)}`);
}else {
    alert("Número inválido")
}