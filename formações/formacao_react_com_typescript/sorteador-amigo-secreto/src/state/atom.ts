import { atom } from "recoil";

export const participantsStateList = atom<string[]>({
  key: 'participantsStateList',
  default: []
});

export const errorMessage = atom<string>({
  key: 'errorMessage',
  default: ''
});
