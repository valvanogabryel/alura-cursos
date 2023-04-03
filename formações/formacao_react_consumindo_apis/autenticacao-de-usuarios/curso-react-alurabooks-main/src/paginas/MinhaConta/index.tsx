import { NavLink, Outlet } from "react-router-dom";

import './MinhaConta.css'

const MinhaConta = () => {
  return (
    <>
      <h1 className="minha-conta__title">Minha Conta</h1>
      <section className="minha-conta__container">
        <div className="minha-conta__navegacao">
          <ul>
            <li>
              <NavLink to='/minha-conta/pedidos'>Pedidos</NavLink>
            </li>
            <li>
              <NavLink to='/minha-conta/trocas'>Trocas</NavLink>
            </li>
            <li>
              <NavLink to='/minha-conta/cupons'>Cupons</NavLink>
            </li>
            <li>
              <NavLink to='/minha-conta/dados'>Seus dados</NavLink>
            </li>
          </ul>
        </div>
        <div className="conteudos">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default MinhaConta;