import { GrupoTransacao } from "./GrupoTransacao";
import { TipoTransacao } from "./TipoTransacao";
import { Transacao } from "./Transacao";

export class Conta {
  nome: string;
  saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
  transacoes: Transacao[] =
    JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
      if (key === "data") {
        return new Date(value);
      }

      return value;
    }) || [];

  constructor(nome: string) {
    this.nome = nome;
  }

  toSorted(listaTransacoes: Transacao[]) {
    return listaTransacoes.sort(
      (t1, t2) => t2.data.getTime() - t1.data.getTime()
    );
  }

  getGruposTransacoes(): GrupoTransacao[] {
    const gruposTransacoes: GrupoTransacao[] = [];
    const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
    const transacoesOrdenadas: Transacao[] = this.toSorted(listaTransacoes);
    let labelAtualGrupoTransacao = "";

    for (let transacao of transacoesOrdenadas) {
      let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", {
        month: "long",
        year: "numeric",
      });

      if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
        labelAtualGrupoTransacao = labelGrupoTransacao;
        gruposTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: [],
        });
      }
      gruposTransacoes.at(-1).transacoes.push(transacao);
    }
    return gruposTransacoes;
  }

  getSaldo() {
    return this.saldo;
  }

  getDataAcesso(): Date {
    return new Date();
  }

  registrarTransacao(novaTransacao: Transacao): void {
    if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
      this.depositar(novaTransacao.valor);
    } else if (
      novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
      novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO
    ) {
      this.debitar(novaTransacao.valor);
      novaTransacao.valor *= -1;
    } else {
      throw new Error("Tipo de transação é inválido!");
    }

    this.transacoes.push(novaTransacao);

    console.log(this.getGruposTransacoes());

    localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
  }

  depositar(valor: number): void {
    if (valor <= 0)
      throw new Error("O valor a ser depositado deve ser maior que 0");

    this.saldo += valor;
    localStorage.setItem("saldo", this.saldo.toString());
  }
  debitar(valor: number): void {
    if (valor <= 0)
      throw new Error("O valor a ser debitado deve ser maior que 0");

    if (valor > this.saldo) throw new Error("Saldo insuficiente");

    this.saldo -= valor;
    localStorage.setItem("saldo", this.saldo.toString());
  }
}

const conta = new Conta("Gabryel Valvano");

export default conta;
