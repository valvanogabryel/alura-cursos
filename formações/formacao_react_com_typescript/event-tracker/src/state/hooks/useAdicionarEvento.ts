import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";
import { eventListState } from "../atom";

const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(eventListState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error('Não é possível adicionar tarefas para dias antes do atual.');
    }

    evento.id = obterId();

    return setListaEventos(listaAnterior => [...listaAnterior, evento]);
  }
}

export default useAdicionarEvento;