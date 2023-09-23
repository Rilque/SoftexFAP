const Banco = {
    Conta: '08457-1',
    Saldo: 2500.00,
    TipoConta: 'Popança',
    Agencia: '1958',
  
    BuscarSaldo: function () {
      return this.Saldo;
    },
  
    Deposito: function (valor) {
      if (valor > 0) {
        this.Saldo += valor;
        return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.Saldo.toFixed(2)}`;
      } else {
        return 'Valor inválido para depósito.';
      }
    },
  
    Saque: function (valor) {
      if (valor > 0 && valor <= this.Saldo) {
        this.Saldo -= valor;
        return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.Saldo.toFixed(2)}`;
      } else {
        return 'Saldo insuficiente ou valor de saque inválido.';
      }
    },
  
    NumeroConta: function () {
      return this.Conta;
    }
  };
  
  console.log(`Número da conta: ${Banco.NumeroConta()}`);
  console.log(`Saldo atual: R$ ${Banco.BuscarSaldo().toFixed(2)}`);
  console.log(Banco.Deposito(720.00));
  console.log(Banco.Saque(200.50));
  console.log(`Saldo atual: R$ ${Banco.BuscarSaldo().toFixed(2)}`);
  