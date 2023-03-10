import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
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

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const response = await fetch('http://localhost:8080/eventos');
    const eventosJson: IEvento[] = await response.json();
    return eventosJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }));
  }
});