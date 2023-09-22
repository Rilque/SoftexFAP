const prompt = require('prompt-sync')();

var nome, nota1, nota2, nota3, media;

aluno = prompt("Informe a nome do aluno: ");
nota1 = parseFloat(prompt("Informe a primeira nota: "));
nota2 = parseFloat(prompt("Informe a segunda nota: "));
nota3 = parseFloat(prompt("Informe a terceira nota: "));

media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

console.log(`O aluno ${aluno} obteve a média ${media}`);