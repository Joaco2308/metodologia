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

