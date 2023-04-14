import { ILivro } from "./ILivro";
import { IOpcaoCompra } from "./IOpcaoCompra";

export interface IItens {
  quantidade: number;
  opcaoCompra: IOpcaoCompra;
  livro: ILivro;
}