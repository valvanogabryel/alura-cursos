export const calculaNovoSaldo = (valores, saldo) => {
  const isNum = Number(valores.valor);
  if (isNum) {
    if (valores.transacao === "Depósito") {
      return saldo + parseInt(valores.valor);
    } else {
      return saldo - parseInt(valores.valor);
    }
  } else {
    alert('insira um valor válido');
    return saldo;
  }
};
