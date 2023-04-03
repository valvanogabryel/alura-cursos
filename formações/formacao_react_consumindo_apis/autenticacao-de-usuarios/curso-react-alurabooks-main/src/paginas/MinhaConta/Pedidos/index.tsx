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

  function formatar(valorPedido: number) {
    return valorPedido.toLocaleString('pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      });
  }

  return (
    <section className="pedidos__container">
      <h1 className="pedidos__title">Pedidos</h1>
      {
        pedidos.map(pedido => (
          <div className="pedido" key={pedido.id}>
            <ul className="pedido__wrapper">
              <li className="pedido__info">
                Pedido: <strong>{pedido.id}</strong>
              </li>
              <li className="pedido__info">
                Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong>
              </li>
              <li className="pedido__info">
                Valor total: <strong>{formatar(pedido.total)}</strong>
              </li>
              <li className="pedido__info">
                Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong>
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