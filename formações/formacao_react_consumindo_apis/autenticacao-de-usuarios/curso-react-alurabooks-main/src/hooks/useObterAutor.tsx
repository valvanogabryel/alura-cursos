import { useQuery } from "@tanstack/react-query";
import { ILivro } from "../interfaces/ILivro";
import { obterAutor } from "../http";

const useObterAutor = (livro: ILivro | null | undefined) => {
  const { data: autor } = useQuery(['autor', livro?.autor], () => obterAutor(livro?.autor));
  return autor;
}

export default useObterAutor;