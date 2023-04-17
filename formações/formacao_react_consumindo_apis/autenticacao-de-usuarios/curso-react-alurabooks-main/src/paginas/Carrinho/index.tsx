import { AbBotao } from "ds-alurabooks";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { Fragment } from "react";
import ItemCarrinho from "../../componentes/ItemCarrinho";

import './Carrinho.css';
import formatadorMoeda from "../../utils/formatadorMoeda";
import { useCarrinhoContext } from "../../common/contexts/carrinho";

const Carrinho = () => {
  const { carrinho, adicionarItemCarrinho } = useCarrinhoContext();

  const valorTotal = carrinho?.total ? carrinho.total : 0;

  return (
    <>
      <TituloPrincipal>Carrinho</TituloPrincipal>
      <section className="cart__container">
        <h3>Itens selecionados</h3>
        {
          carrinho?.itens?.map((livro, index) => (
            <ItemCarrinho
              item={livro}
              key={index}
            />
          ))
        }
        <a href="/categorias/programação">Continuar comprando</a>

        <div className="cart-total">
          <span className="total-label">Total da compra:</span>
          <span className="total-value">{formatadorMoeda(valorTotal)}</span>
          <AbBotao texto="Finalizar compra" />
        </div>
      </section>

    </>
  );
}

export default Carrinho;