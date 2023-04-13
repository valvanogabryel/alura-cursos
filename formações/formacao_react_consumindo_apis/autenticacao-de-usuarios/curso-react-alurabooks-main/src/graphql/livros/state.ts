import { makeVar } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { ICategoria } from "../../interfaces/ICategoria";

interface FiltoLivros {
  categoria?: ICategoria;
  titulo?: string;
}

export const filtroLivrosVar = makeVar<FiltoLivros>({});

export const livrosVar = makeVar<ILivro[]>([]);