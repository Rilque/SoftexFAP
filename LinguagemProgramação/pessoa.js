import { ListaEncadeada } from "./listaEncadeada";

class Pessoa{
    constructor(nome, idade){
        this.nome;
        this.idade;
        this.filhos = new ListaEncadeada();
    }
}

var listaPessoas = new ListaEncadeada();

var alex = new Pessoa("Alex Lopes", 37);
var livia = new Pessoa("Lívia Deodato", 41);
var gabriel = new Pessoa("Gabriel Leal", 28);
var mariana = new Pessoa("Mariana Fernanda", 23);

listaPessoas.addNoFim(alex);
listaPessoas.addNoFim(livia);
listaPessoas.addNoFim(gabriel);
listaPessoas.addNoFim(mariana);

var caio = new Pessoa("Caio Lopes", 11);
var Kaua = new Pessoa("Kauã Lopes", 8);
var kaue = new Pessoa("Kauê Lopes", 6);
alex.filhos.addNoFim(caio);
alex.filhos.addNoFim(Kaua);
alex.filhos.addNoFim(kaue);

var joao = new Pessoa("João Deodato", 19);
livia.filhos.addNoFim(joao);
var joaoFilho = new Pessoa("João Deodato Filho", 1);
joao.filhos.addNoFim(joaoFilho);

var vicente = new Pessoa("Vicente Leal", 0);
gabriel.filhos.addNoFim(vicente);
mariana.filhos.addNoFim(vicente);

listaPessoas.listarConteudos();
alex.filhos.listarConteudos();

console.log(livia.filhos);