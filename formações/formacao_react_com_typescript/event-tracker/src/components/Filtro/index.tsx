import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroEventos } from '../../interfaces/IFiltroEventos';
import { filtroEventos } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {

  const [data, setData] = useState('');
  const [estado, setEstado] = useState<'ambos' | 'completo' | 'incompleto'>('ambos');

  const setFiltroEventos = useSetRecoilState<IFiltroEventos>(filtroEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const filtro: IFiltroEventos = {};

    if (data) {
      filtro.data = new Date(data);
    } else {
      filtro.data = null;
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

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro