function buscaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;
  
    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
  
      if (array[meio] === valor) {
        return meio;
      } else if (array[meio] < valor) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
  
    return -1;
  }
  
  const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
  const valorProcurado = 20;
  
  const indiceEncontrado = buscaBinaria(array, valorProcurado);
  
  if (indiceEncontrado !== -1) {
    console.log(`O valor ${valorProcurado} foi encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`O valor ${valorProcurado} não foi encontrado no array.`);
  }
  