class Banco {

  depositar(saldo: number, monto: number): number {
    return saldo + monto;
  }

  retirar(saldo: number, monto: number): number {
    if (monto > saldo) {
      throw new Error("Saldo insuficiente para retirar ");
    }
    return saldo - monto;
  }

  transferir(saldoOrigen: number, monto: number): number {
    if (monto > saldoOrigen) {
      throw new Error("Saldo no posible de transfeir");
    }
    return saldoOrigen - monto;
  }
}

const banco = new Banco();

let saldo = 1000;

console.log("Saldo inicial:", saldo);
console.log("Depositar 500:", banco.depositar(saldo, 500));
console.log("Retirar 300:", banco.retirar(saldo, 300));
console.log("Transferir 200:", banco.transferir(saldo, 200));
