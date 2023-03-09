import { selector } from "recoil";
import { eventListState, filtroEventos } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtros = get(filtroEventos);
    const todosOsEventos = get(eventListState);
    const eventos = todosOsEventos.filter(evento => {
      if (!filtros.data) {
        return true;
      }

      const mesmoDia = filtros.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
      return mesmoDia;
    }).filter(evento => {
      if (!filtros.estado) {
        return true;
      }
      const taCompleto = filtros.estado === 'completo' ? evento.completo : !evento.completo;
      return taCompleto;
    });

    return eventos;
  }
});