import { AbBotao } from "ds-alurabooks";
import { ILivro } from "../../interfaces/ILivro";
import formatadorMoeda from "../../utils/formatadorMoeda";
import { Link } from "react-router-dom";

import './MiniCardLivro.css';

const obterValorMinimo = (livro: ILivro) => {
  return Math.min(...livro.opcoesCompra.map(opcao => opcao.preco));
}

const MiniCardLivro = (livro: ILivro) => {
  return (
    <div
      className="card__container"
      key={livro.id}
    >
      <img
        src={livro.imagemCapa}
        alt={livro.descricao}
      />
      <div className="card__info">
        <h6>{livro.titulo}</h6>
        <em>A partir de:</em>
        <strong>{formatadorMoeda(obterValorMinimo(livro))}</strong>
      </div>
      <div className="card__button">
        <Link to={`/livro/${livro.slug}`}>
          <AbBotao texto="Comprar" />
        </Link>
      </div>
    </div>
  );
}

export default MiniCardLivro;