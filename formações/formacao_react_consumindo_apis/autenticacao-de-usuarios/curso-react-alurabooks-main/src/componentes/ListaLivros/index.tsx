import { useObterLivros } from "../../graphql/livros/hooks";
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state";
import { ICategoria } from "../../interfaces/ICategoria";
import MiniCardLivro from "../MiniCardLivro";

import { useReactiveVar } from '@apollo/client';

import './ListaLivros.css';
import { AbCampoTexto } from "ds-alurabooks";
import { useEffect, useState } from "react";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [tituloBusca, setTituloBusca] = useState('');

  // const { data: livros } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterLivrosPorCategoria(categoria));

  useEffect(() => {
    filtroLivrosVar({
      ...filtroLivrosVar(),
      titulo: tituloBusca.length >= 3 ? tituloBusca : ''
    });
  }, [tituloBusca]);

  filtroLivrosVar({
    ...filtroLivrosVar(),
    categoria
  });


  const livros = useReactiveVar(livrosVar);

  useObterLivros();

  return (
    <section>
      <form style={{
        maxWidth: '25%',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <AbCampoTexto
          value={tituloBusca}
          onChange={setTituloBusca}
          placeholder="Digite o título"
        />
        <div style={{
          marginTop: '16px'
        }}>
        </div>
      </form>
      <div className="livros__container">
        {
          livros.map(livro => (
            <MiniCardLivro
              {...livro}
              key={livro.id}
            />
          ))
        }
      </div>
    </section>
  );
}

export default ListaLivros;