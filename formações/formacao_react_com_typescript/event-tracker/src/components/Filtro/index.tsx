import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroEventos } from '../../interfaces/IFiltroEventos';
import { filtroEventos } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {

  const [data, setData] = useState('');
  const [estado, setEstado] = useState<string>('ambos');
  const setFiltroEventos = useSetRecoilState<IFiltroEventos>(filtroEventos);

  const estados = [
    {
      label: 'Ambos',
      value: 'ambos'
    },
    {
      label: 'Completo',
      value: 'completo'
    },
    {
      label: 'Incompleto',
      value: 'incompleto'
    }
  ];

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const filtro: IFiltroEventos = {};

    if (data) {
      filtro.data = new Date(data);
    } else {
      filtro.data = null;
    }

    if (estado !== 'ambos') {
      filtro.estado = estado;
    }

    setFiltroEventos(filtro);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />
    <div>
      <h3>Filtrar por estado</h3>
      <select
        name="estados"
        value={estado}
        onChange={event => setEstado(event.target.value)}
      >
        {
          estados.map((estado, index) => (
            <option
              value={estado.value}
              key={index}
            >
              {estado.label}
            </option>
          ))
        }
      </select>
    </div>
    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro