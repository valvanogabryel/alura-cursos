// import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes } from "ds-alurabooks"
import { AbInputQuantidade } from "ds-alurabooks"
import { obterLivrosPorSlug } from "../../http";
import { useParams } from "react-router-dom";

import './DetalhesLivro.css';

const DetalhesLivro = () => {
  const { slug } = useParams();
  const { data: livro } = useQuery(['livroSlug'], () => obterLivrosPorSlug(slug || ''));

  const opcoes: AbGrupoOpcao[] = [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$29.00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$29.00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$40.00',
      rodape: '.pdf, .epub, .mob'
    },
  ];

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
            <p className="info__autor">Por: {livro?.autor}</p>
            <h5>Selecione o formato do seu livro</h5>
            <div className="detalhes__opcoes">
              <AbGrupoOpcoes opcoes={opcoes} valorPadrao={opcoes[0]} />
              <span>*Você terá acesso às futuras atualizações do livro.</span>
            </div>
            <div className="quantidade">
              <AbInputQuantidade />
              <AbBotao texto="Comprar" />
            </div>
          </div>
        </div>
        <div>
          <h2>Sobre o autor</h2>
          {/* linha */}
          <p>{livro?.sobre}</p>
          <h2>Sobre o livro</h2>
          {/* linha */}
          <p>{livro?.sobre}</p>
        </div>
      </section>
    </>
  );
}

export default DetalhesLivro;