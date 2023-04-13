import { useQuery, useReactiveVar } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";
import { OBTER_DETALHES_LIVRO, OBTER_LIVROS, OBTER_LIVROS_DESTAQUE } from "./queries";
import { filtroLivrosVar, livrosVar } from "./state";

export const useObterLivros = () => {
  const filtros = useReactiveVar(filtroLivrosVar);

  return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: filtros.categoria?.id,
      titulo: filtros.titulo
    },
    onCompleted(data) {
      if (data.livros) livrosVar(data.livros);
    }
  });
}

export const useObterDestaques = () => {
  return useQuery<{
    destaques: {
      lancamentos: ILivro[],
      maisVendidos: ILivro[]
    }
  }>(OBTER_LIVROS_DESTAQUE);
}

export const useObterDetalhes = (slug: string) => {
  return useQuery<{ livro: ILivro }>(OBTER_DETALHES_LIVRO, {
    variables: { slug }
  });
}