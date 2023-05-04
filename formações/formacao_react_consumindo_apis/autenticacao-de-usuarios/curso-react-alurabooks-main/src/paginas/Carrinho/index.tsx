import { AbBotao } from "ds-alurabooks";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import ItemCarrinho from "../../componentes/ItemCarrinho";

import { useCarrinhoContext } from "../../common/contexts/carrinho";

import formatadorMoeda from "../../utils/formatadorMoeda";

// import Loader from "../../componentes/Loader";

import './Carrinho.css';
import FullPageLoader from "../../componentes/Loader/FullPageLoader";

const Carrinho = () => {
  const { carrinho, loading } = useCarrinhoContext();

  const valorTotal = carrinho?.total ? carrinho.total : 0;

  return (
    <>
      <TituloPrincipal>Carrinho</TituloPrincipal>
      <section className="cart__container">
        <h3>Itens selecionados</h3>
        {loading && <FullPageLoader />}
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