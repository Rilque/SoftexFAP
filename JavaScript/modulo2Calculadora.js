while (true) {

    console.log("========== Calculadora ==========");
    console.log("1: Soma");
    console.log("2: Subtração");
    console.log("3: Multiplicação");
    console.log("4: Divisão"); 
    console.log("0: Sair");
   
    

    var opcao = parseInt(prompt("Digite o número da operação desejada:"));
  

    if (opcao === 0) {
      console.log("Saindo da calculadora...");
      console.log("========== Final Calculadora ==========");
      break;
  
      
    } else if (opcao >= 1 && opcao <= 4) {
      var num1 = parseFloat(prompt("Digite o primeiro número:"));
      var num2 = parseFloat(prompt("Digite o segundo número:"));
      var calcSobra= num1 % num2;
        var sobra;
      
          if(calcSobra > 0){
          sobra = (`houve ${calcSobra} de sobra`)
          } else {
          sobra = "não houve sobra."
          }
          
      var resultado;
  
      if (opcao === 1) {
        resultado = num1 + num2;
        console.log("Resultado:", resultado.toFixed(2));
      } else if (opcao === 2) {
        resultado = num1 - num2;
        console.log("Resultado:", resultado.toFixed(2));
      } else if (opcao === 3) {
        resultado = num1 * num2;
        console.log("Resultado:", resultado.toFixed(2));
      } else if (opcao === 4) {
        resultado = num1 / num2;
        alert(`Resultado ${resultado.toFixed(2)} e ${sobra} `);
      }
    } else {
      alert("Opção inválida. Por favor, escolha uma das opções listadas.");
    }
  }