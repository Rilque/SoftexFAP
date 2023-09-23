class Pessoa {
    constructor(nome, idade, filho = null) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
    }
  }
  
  class ListaEncadeada {
    constructor() {
      this.head = null;
    }
  
    adicionarPessoa(nome, idade, filho) {
      const novaPessoa = new Pessoa(nome, idade, filho);
  
      if (!this.head) {
        this.head = novaPessoa;
      } else {
        let atual = this.head;
        while (atual.filho) {
          atual = atual.filho;
        }
        atual.filho = novaPessoa;
      }
    }
  
    listarPessoas() {
      let atual = this.head;
      while (atual) {
        console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
        if (atual.filho) {
          console.log(`  Filho de: ${atual.filho.nome}`);
        }
        atual = atual.filho;
      }
    }
  }
  
const lista = new ListaEncadeada();
lista.adicionarPessoa("Rildo", 30);
lista.adicionarPessoa("Edileuza", 25, lista.head);
lista.adicionarPessoa("Bruna", 40, lista.head);
lista.adicionarPessoa("Rilque", 5, lista.head.filho);
lista.adicionarPessoa("Lívia", 3, lista.head.filho);
lista.adicionarPessoa("Alene", 7, lista.head.filho);

console.log("Lista de Pessoas:");
lista.listarPessoas();

  