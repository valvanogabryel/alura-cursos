import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CarrinhoContext } from 'common/context/Carrinho';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function addProduct(newProduct) {
    const hasProduct = carrinho.some(product => product.id === newProduct.id);

    if (!hasProduct) {
      newProduct.quantidade = 1;
      return setCarrinho(product => [...product, newProduct]);
    }

    setCarrinho(previousCart => previousCart.map(cartItem => {
      if (cartItem.id === newProduct.id) cartItem.quantidade += 1;
      return cartItem;
    }))
  }

  return (
    <Container>
      <div>
        <img
          src={`/assets/${foto}.png`}
          alt={`foto de ${nome}`}
        />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => addProduct({ nome, foto, id, valor })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)