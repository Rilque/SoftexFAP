// Tipo: String (nome da pessoa)
// Tipo: Number (salário da pessoa)
// Tipo: Number (idade da pessoa)
// Tipo: Boolean (indica se a pessoa possui diploma)

const pessoas = [
    {
      nome: 'João',            
      salario: 2500.50,       
      idade: 30,            
      possuiDiploma: true, 
    },
    {
      nome: 'Maria',
      salario: 3000.75,
      idade: 25,
      possuiDiploma: false,
    },
    {
      nome: 'Carlos',
      salario: 2000.00,
      idade: 35,
      possuiDiploma: true,
    },
  ];
  
  pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Salário: R$ ${pessoa.salario.toFixed(2)}`);
    console.log(`Idade: ${pessoa.idade} anos`);
    console.log(`Possui Diploma: ${pessoa.possuiDiploma ? 'Sim' : 'Não'}`);
    console.log(' ');
  });
  