import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventosAsync } from "./seletores";

export const eventListState = atom<IEvento[]>({
  key: 'eventListState',
  default: eventosAsync
});

export const filtroEventos = atom<IFiltroEventos>({
  key: 'filtroDeEventos',
  default: {}
});