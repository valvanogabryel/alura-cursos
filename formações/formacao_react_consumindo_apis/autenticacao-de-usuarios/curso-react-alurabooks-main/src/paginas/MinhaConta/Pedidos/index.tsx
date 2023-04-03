import { AbBotao } from "ds-alurabooks";
import './Pedidos.css';
import { useEffect, useState } from "react";
import { http } from "../../../http";
import { useObterToken } from "../../../hooks";
import { IPedido } from "../../../interfaces/IPedido";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);

  const token = useObterToken();

  useEffect(() => {
    http.get<IPedido[]>('http://localhost:8000/pedidos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        setPedidos(res.data);
      })
      .catch(err => {
        alert(err);
      })
  }, [token]);


  return (
    <section className="pedidos__container">
      <h1 className="pedidos__title">Pedidos</h1>
      <div className="pedido">
        <ul className="pedido__wrapper">
          <li className="pedido__info">
            Pedido: <strong>89019041</strong>
          </li>
          <li className="pedido__info">
            Data do pedido: <strong>26/05/2023</strong>
          </li>
          <li className="pedido__info">
            Valor total: <strong>R$48,00</strong>
          </li>
          <li className="pedido__info">
            Entrega realizada em: <strong>30/05/2023</strong>
          </li>
        </ul>
        <AbBotao texto="Detalhes" />
      </div>
      <div className="pedido">
        <ul className="pedido__wrapper">
          <li className="pedido__info">
            Pedido: <strong>89019041</strong>
          </li>
          <li className="pedido__info">
            Data do pedido: <strong>26/05/2023</strong>
          </li>
          <li className="pedido__info">
            Valor total: <strong>R$48,00</strong>
          </li>
          <li className="pedido__info">
            Entrega realizada em: <strong>30/05/2023</strong>
          </li>
        </ul>
        <AbBotao texto="Detalhes" />
      </div>
      <div className="pedido">
        <ul className="pedido__wrapper">
          <li className="pedido__info">
            Pedido: <strong>89019041</strong>
          </li>
          <li className="pedido__info">
            Data do pedido: <strong>26/05/2023</strong>
          </li>
          <li className="pedido__info">
            Valor total: <strong>R$48,00</strong>
          </li>
          <li className="pedido__info">
            Entrega realizada em: <strong>30/05/2023</strong>
          </li>
        </ul>
        <AbBotao texto="Detalhes" />
      </div>
      {
        pedidos.map(pedido => (
          <div className="pedido" key={pedido.id}>
            <ul className="pedido__wrapper">
              <li className="pedido__info">
                Pedido: <strong>{pedido.id}</strong>
              </li>
              <li className="pedido__info">
                Data do pedido: <strong>{pedido.data}</strong>
              </li>
              <li className="pedido__info">
                Valor total: <strong>R${pedido.total}</strong>
              </li>
              <li className="pedido__info">
                Entrega realizada em: <strong>{pedido.entrega}</strong>
              </li>
            </ul>
            <AbBotao texto="Detalhes" />
          </div>
        ))
      }
    </section>
  );
}

export default Pedidos;