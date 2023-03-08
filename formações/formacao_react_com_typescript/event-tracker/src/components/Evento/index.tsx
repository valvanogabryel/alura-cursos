import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento'
import { eventListState } from '../../state/atom';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<
  {
    evento: IEvento,
    aoAlterarStatus: (id: number) => void,
  }> = ({ evento, aoAlterarStatus }) => {

    const estilos = [
      style.Evento
    ]

    if (evento.completo) {
      estilos.push(style.completo)
    }

    const setEventList = useSetRecoilState<IEvento[]>(eventListState);

    const excluirEvento = () => {
      setEventList(listaAnterior => listaAnterior.filter(event => event.id !== evento.id));
    }

    return (<div className={estilos.join(' ')}>

      <EventoCheckbox evento={evento} aoAlterarStatus={aoAlterarStatus} />
      <div className="cards-info">
        <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={excluirEvento}></i>
    </div>)
  }

export default Evento