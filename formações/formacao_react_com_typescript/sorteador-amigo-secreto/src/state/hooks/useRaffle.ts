import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import carryOutDraw from "../helpers/carryOutDraw";
import { useParticipantsList } from "./useParticipantsList"

export const useRaffle = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = carryOutDraw(participants);
    setResult(result);
  }
}