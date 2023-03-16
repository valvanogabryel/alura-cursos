import { secretFriendResult } from './../atom';
import { useRecoilValue } from "recoil"

export const useRaffleResult = () => {
  return useRecoilValue(secretFriendResult);
}