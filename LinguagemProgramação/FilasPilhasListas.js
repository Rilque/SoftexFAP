// Exemplo da fila (Queue)
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Fila vazia";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Exemplo da lista
  class ArrayList {
    constructor() {
      this.items = [];
    }
  
    add(element) {
      this.items.push(element);
    }
  
    remove(index) {
      if (index < 0 || index >= this.items.length) {
        return "Índice inválido";
      }
      return this.items.splice(index, 1)[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Exemplo da pilha (Stack)
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Pilha vazia";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const array = [3, 7, 9, 1, 0];
  
  // Resposta Fila
  const fila = new Queue();
  for (const item of array) {
    fila.enqueue(item);
  }
  
  console.log("Sequência removida da fila:");
  while (!fila.isEmpty()) {
    console.log(fila.dequeue());
  }
  
  // Resposta Lista
  const lista = new ArrayList();
  for (const item of array) {
    lista.add(item);
  }
  
  console.log("\nSequência removida da lista:");
  while (!lista.isEmpty()) {
    console.log(lista.remove(0));
  }
  
  // Resposta pilha
  const pilha = new Stack();
  for (const item of array) {
    pilha.push(item);
  }
  
  console.log("\nSequência removida da pilha:");
  while (!pilha.isEmpty()) {
    console.log(pilha.pop());
  }
  
  