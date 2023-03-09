import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const eventListState = atom<IEvento[]>({
  key: 'eventListState',
  default: [
    {
      "descricao": "Estudar React",
      "inicio": new Date("2023-03-09T09:00"),
      "fim": new Date("2023-03-09T13:00"),
      "completo": false,
      "id": 1642342747
    },
    {
      "descricao": "Estudar Recoil",
      "inicio": new Date("2023-03-10T09:00"),
      "fim": new Date("2023-03-10T11:00"),
      "completo": false,
      "id": 1642342959
    }
  ]
})