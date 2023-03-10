import { atom } from "recoil";

export const participantsStateList = atom<string[]>({
  key: 'participantsStateList',
  default: []
})
