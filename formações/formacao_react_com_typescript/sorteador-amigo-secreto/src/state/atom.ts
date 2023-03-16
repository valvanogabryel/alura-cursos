import { atom } from "recoil";

export const participantsStateList = atom<string[]>({
  key: 'participantsStateList',
  default: []
});

export const secretFriendResult = atom<Map<string, string>>({
  key: 'secretFriendResult',
  default: new Map()
});

export const errorMessage = atom<string>({
  key: 'errorMessage',
  default: ''
});
