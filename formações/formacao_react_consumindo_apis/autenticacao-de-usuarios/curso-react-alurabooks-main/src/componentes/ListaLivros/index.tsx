import { useObterLivros } from "../../graphql/livros/hooks";
import { livrosVar } from "../../graphql/livros/state";
import { ICategoria } from "../../interfaces/ICategoria";
import MiniCardLivro from "../MiniCardLivro";

import { useReactiveVar } from '@apollo/client';

import './ListaLivros.css';
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [tituloBusca, setTituloBusca] = useState('');

  // const { data: livros } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterLivrosPorCategoria(categoria));

  useObterLivros(categoria);
  // const livros = data?.livros;

  const livros = useReactiveVar(livrosVar);
  console.log(`livros => ${livros}`);

  function buscarLivro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (tituloBusca) {
      // refetch({
      //   categoriaId: categoria.id,
      //   titulo: tituloBusca
      // });
    }
  }

  return (
    <section>
      <form onSubmit={buscarLivro} style={{
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
          <AbBotao
            texto="Buscar"
          />
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