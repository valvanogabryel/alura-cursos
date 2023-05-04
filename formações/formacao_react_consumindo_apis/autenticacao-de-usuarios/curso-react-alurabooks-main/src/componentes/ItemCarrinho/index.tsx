import { AbInputQuantidade } from "ds-alurabooks";
import { IItens } from "../../interfaces/IItems";
import iconeLixeira from './assets/lixeira.png';

import './ItemCarrinho.css';
import formatadorMoeda from "../../utils/formatadorMoeda";
import { useCarrinhoContext } from "../../common/contexts/carrinho";

interface ItemCarrinhoProps {
  item: IItens
}

const ItemCarrinho = ({ item }: ItemCarrinhoProps) => {
  const livro = item.livro;

  const { adicionarItemCarrinho, removerItemCarrinho } = useCarrinhoContext();

  function alterarQuantidade(quantidade: number) {
    if (quantidade === 0) {
      removerItemCarrinho({
        livro,
        opcaoCompra: item.opcaoCompra,
        quantidade
      });
    }

    adicionarItemCarrinho({
      livro,
      opcaoCompra: item.opcaoCompra,
      quantidade
    });
  }

  return (
    <div className="item__container">
      <div className="image__wrapper">
        <img
          src={livro.imagemCapa}
          alt={`capa do livro ${livro.titulo}, escrito por ${livro.autor.nome}`}
        />
      </div>

      <div className="item__info">
        <h2>{livro.titulo}</h2>
        <p>{livro.descricao}</p>
        <p>Por: {livro.autor.nome ?? 'Autor desconhecido'}</p>
      </div>


      <div className="item__about">

        <div className="item__price">
          <p>Preço:</p>
          <span>{formatadorMoeda(item.opcaoCompra.preco)}</span>
        </div>

        <div>
          <AbInputQuantidade
            value={item.quantidade}
            onChange={(alterarQuantidade)}
          />
        </div>

        <div className="trash-icon">
          <img
            src={iconeLixeira}
            alt="Excluir"
          />
        </div>

      </div>
    </div>
  );
}

export default ItemCarrinho;