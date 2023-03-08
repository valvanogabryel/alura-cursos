
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend';
import 'kalend/dist/styles/index.css';
import { useRecoilValue } from 'recoil';
import { eventListState } from '../../state/atom';
import useAtualizarEvento from '../../state/hooks/useAtualizarEventio';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();

  const eventos = useRecoilValue(eventListState);


  const atualizarEvento = useAtualizarEvento();

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })

  const onEventDragFinish: OnEventDragFinish = (
    unchangedKalendEvent: CalendarEvent,
    updatedKalendEvent: CalendarEvent
  ) => {
    const evento = eventos.find(evento => evento.descricao === updatedKalendEvent.summary);

    if (evento) {
      const eventoAtualizado = {
        ...evento
      }

      eventoAtualizado.inicio = new Date(updatedKalendEvent.startAt);
      eventoAtualizado.fim = new Date(updatedKalendEvent.endAt);

      atualizarEvento(evento);
    }
  }

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario