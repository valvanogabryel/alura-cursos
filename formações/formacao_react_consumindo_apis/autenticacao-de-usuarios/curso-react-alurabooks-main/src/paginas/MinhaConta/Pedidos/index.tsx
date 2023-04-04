import { useEffect, useState } from "react";
import { AbBotao } from "ds-alurabooks";
import { IPedido } from "../../../interfaces/IPedido";
import http from "../../../http";
import './Pedidos.css';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);

  useEffect(() => {
    http.get<IPedido[]>('pedidos')
      .then(res => {
        setPedidos(res.data);
      })
      .catch(err => {
        alert(err);
      })
  }, []);

  function excluirPedido(idDoPedido: number) {
    const usuarioTemCerteza = window.confirm('Tem certeza que deseja excluir o pedido?');
    if (usuarioTemCerteza) {
      http.delete<IPedido>(`pedidos/${idDoPedido}`)
        .then(() => {
          setPedidos(pedidos.filter(pedido => pedido.id !== idDoPedido));
        })
        .catch(err => console.log(err));
    }
  }

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
          <div
            className="pedido"
            key={pedido.id}
          >
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
            <button
              type="button"
              className="pedido__excluir"
              onClick={() => excluirPedido(pedido.id)}
            >
              Excluir pedido
            </button>
          </div>
        ))
      }
    </section>
  );
}

export default Pedidos;