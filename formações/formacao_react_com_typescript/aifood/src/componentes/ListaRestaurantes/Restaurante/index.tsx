import IRestaurante from '../../../interfaces/IRestaurante';
import IPrato from '../../../interfaces/IPrato';
import Prato from '../Prato';
import estilos from './Restaurante.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface RestauranteProps {
  restaurante: IRestaurante;
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  const [pratos, setPratos] = useState<IPrato[]>([]);

  useEffect(() => {
    axios.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
      .then(response => {
        setPratos(response.data);
      })
  }, [restaurante.id]);

  return (<section className={estilos.Restaurante}>
    <div className={estilos.Titulo}>
      <h2>{restaurante.nome}</h2>
    </div>
    <div>
      {pratos.length > 1 ? pratos.map(item => <Prato prato={item} key={item.id} />) : <div>Vitrine indisponível</div>}
    </div>
  </section>)
}

export default Restaurante