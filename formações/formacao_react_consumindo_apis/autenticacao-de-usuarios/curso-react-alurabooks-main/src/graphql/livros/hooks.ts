import { useQuery } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { ICategoria } from "../../interfaces/ICategoria";
import { OBTER_LIVROS } from "./queries";
import { livrosVar } from "./state";

export const useObterLivros = (categoria: ICategoria) => {
  return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: categoria.id
    },
    onCompleted(data) {
      if (data.livros) livrosVar(data.livros);
    }
  });
}