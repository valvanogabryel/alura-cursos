import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventListState } from "../atom";

const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(eventListState);
  return (evento: IEvento) => {
    const eventoAlterado = {
      ...evento
    }
    return setListaEventos(listaAnterior => {
      const indice = listaAnterior.findIndex(event => event.id === evento.id);
      return [...listaAnterior.slice(0, indice), eventoAlterado, ...listaAnterior.slice(indice + 1)];
    })
  }
}

export default useAtualizarEvento;