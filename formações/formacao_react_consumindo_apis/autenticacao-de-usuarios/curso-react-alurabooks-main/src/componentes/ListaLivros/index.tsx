import { useQuery } from "@tanstack/react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterLivrosPorCategoria } from "../../http";
import MiniCardLivro from "../MiniCardLivro";

import './ListaLivros.css';

interface ListaLivrosProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const { data: livros } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterLivrosPorCategoria(categoria));

  return (
    <section className="livros__container">
      {
        livros?.map(livro => (
          <MiniCardLivro
            {...livro}
            key={livro.id}
          />
        ))
      }
    </section>
  );
}

export default ListaLivros;