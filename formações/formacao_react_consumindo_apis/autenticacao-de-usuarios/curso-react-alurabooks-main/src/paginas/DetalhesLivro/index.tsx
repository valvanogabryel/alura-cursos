// import { useParams } from "react-router-dom";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes } from "ds-alurabooks"
import { AbInputQuantidade } from "ds-alurabooks"
import { useParams } from "react-router-dom";

import './DetalhesLivro.css';
import Loader from "../../componentes/Loader";
import { useState } from "react";
import formatadorMoeda from "../../utils/formatadorMoeda";
import BlocoSobre from "../../componentes/BlocoSobre";
import { useObterDetalhes } from "../../graphql/livros/hooks";

const DetalhesLivro = () => {
  const [opcao, setOpcao] = useState<AbGrupoOpcao>();

  const { slug } = useParams();
  // const {
  //   data: livro,
  //   isLoading,
  //   error
  // } = useQuery<ILivro | null, AxiosError>(['livroSlug', slug], () => obterLivrosPorSlug(slug || ''));

  const { data, loading } = useObterDetalhes(slug || '');
  const livro = data?.livro;
  const autor = {
    nome: livro?.autor.nome,
    sobre: livro?.autor.sobre
  };

  // const nomeAutor: string = autor && autor.nome ? autor.nome : 'Autor desconhecido';

  if (livro === null) return <h1>Livro não encontrado</h1>

  // if (error && error.message) {
  //   console.log(error.message);
  //   return <h1>Ops... Algum erro inesperado aconteceu :(</h1>
  // }

  if (loading || !livro) return <Loader />

  const opcoes: AbGrupoOpcao[] = livro?.opcoesCompra ? livro.opcoesCompra.map(opcao => ({
    id: opcao.id,
    corpo: formatadorMoeda(opcao.preco),
    titulo: opcao.titulo,
    rodape: opcao.formatos ? opcao.formatos.join(',') : ''
  }))
    : [];

  return (
    <>
      <TituloPrincipal>Detalhes do Livro</TituloPrincipal>
      <section className="detalhes__container">
        <div className="detalhes__livro">
          <div className="detalhes__capa">
            <img src={livro?.imagemCapa} alt={livro?.descricao} />
          </div>
          <div className="detalhes__info">
            <h1 className="info__title">{livro?.titulo}</h1>
            <p className="info__descricao">{livro?.descricao}</p>
            <p className="info__autor">Por: {autor.nome || 'Autor Desconhecido'}</p>
            <h5>Selecione o formato do seu livro</h5>
            <div className="detalhes__opcoes">
              <AbGrupoOpcoes
                opcoes={opcoes}
                onChange={setOpcao}
                valorPadrao={opcao}
              />
              <span>*Você terá acesso às futuras atualizações do livro.</span>
            </div>
            <div className="quantidade">
              <AbInputQuantidade />
              <AbBotao texto="Comprar" />
            </div>
          </div>
        </div>
        <div className="sobre__wrapper">
          {/* <SobreAutor idAutor={livro?.autor} /> */}
          <BlocoSobre
            titulo="Sobre o autor"
            corpo={autor.sobre}
          />
          <BlocoSobre
            titulo="Sobre o livro"
            corpo={livro?.sobre}
          />
        </div>
      </section>
    </>
  );
}

export default DetalhesLivro;