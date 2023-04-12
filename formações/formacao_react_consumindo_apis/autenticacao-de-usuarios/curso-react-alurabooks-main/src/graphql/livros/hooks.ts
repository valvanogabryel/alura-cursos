import { useQuery } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { ICategoria } from "../../interfaces/ICategoria";
import { OBTER_LIVROS } from "./queries";

export const useObterLivros = (categoria: ICategoria) => {
  return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: categoria.id
    }
  });
}