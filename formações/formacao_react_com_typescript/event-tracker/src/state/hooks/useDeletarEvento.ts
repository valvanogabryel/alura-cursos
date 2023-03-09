import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventListState } from "../atom";

const useDeletarEvento = () => {
  const setEventList = useSetRecoilState<IEvento[]>(eventListState);

  return (evento: IEvento) => {
    return setEventList(listaAnterior =>
      listaAnterior.filter(event => event.id !== evento.id));
  }
}

export default useDeletarEvento;