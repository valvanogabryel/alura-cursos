import { Armazenador } from "../utils/Armazenador.js";
import { ValidaDebito, ValidaDeposito } from "./Decorators.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

export class Conta {
  protected nome: string;
  protected saldo: number = Armazenador.obter<number>("saldo") || 0;
  private transacoes: Transacao[] =
    Armazenador.obter<Transacao[]>("transacoes", (key, value) => {
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

    Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
  }

  @ValidaDeposito
  private depositar(valor: number): void {
    this.saldo += valor;
    Armazenador.salvar("saldo", this.saldo.toString());
  }

  @ValidaDebito
  private debitar(valor: number): void {
    this.saldo -= valor;
    Armazenador.salvar("saldo", this.saldo.toString());
  }
}

export class ContaPremium extends Conta {
  registrarTransacao(transacao: Transacao): void {
    const valorBonus = 0.5;
    const tipoBonus = valorBonus < 1 ? "centavos" : "reais";

    if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
      console.log(`Você recebeu um bônus de ${valorBonus} ${tipoBonus}!`);
      transacao.valor += 0.5;
    }

    super.registrarTransacao(transacao);
  }
}

const conta = new Conta("Walter White");
const contaPremium = new ContaPremium("Gabryel Valvano");

export default conta;
