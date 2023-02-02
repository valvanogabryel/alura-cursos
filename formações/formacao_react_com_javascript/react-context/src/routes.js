import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from 'common/context/Usuario';
import { CarrinhoProvider } from "common/context/Carrinho";
import { PaymentProvider } from "common/context/Pagamento";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <PaymentProvider>
            <CarrinhoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </CarrinhoProvider>
          </PaymentProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter >
  )
}

export default Router;