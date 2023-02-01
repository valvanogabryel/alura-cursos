import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'common/context/Carrinho';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, addProduct, removeProduct } = useCarrinhoContext();
  const productInCart = carrinho.find(cartItem => cartItem.id === id);

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
          onClick={() => removeProduct(id)}
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        {
          productInCart?.quantidade || 0
        }
        <IconButton
          onClick={() => addProduct({ nome, foto, id, valor })}
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)