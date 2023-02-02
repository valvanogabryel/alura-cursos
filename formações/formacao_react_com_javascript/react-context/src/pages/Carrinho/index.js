import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { usePaymentContext } from 'common/context/Pagamento';
import Produto from 'components/Produto';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, cartTotalValue } = useCarrinhoContext();
  const { paymentTypes, payment, changePayment } = usePaymentContext();
  const history = useHistory();

  return (
    <Container>
      <Voltar
        onClick={() => history.goBack()}
      />
      <h2>
        Carrinho
      </h2>
      {
        carrinho.map(product => (
          <Produto
            {...product}
            key={product.id}
          />
        ))
      }
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={payment.id}
          onChange={(event) => changePayment(event.target.value)}
        >
          {
            paymentTypes.map(type => <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>)
          }
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: {cartTotalValue.toFixed(2)}</h2>
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Carrinho;