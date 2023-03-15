import { useRecoilValue } from "recoil"
import { participantsStateList } from "../atom"


export const useParticipantsList = () => {
  return useRecoilValue(participantsStateList);
}