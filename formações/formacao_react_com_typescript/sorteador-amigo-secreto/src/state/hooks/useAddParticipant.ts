import { useSetRecoilState } from "recoil";
import { participantsStateList } from "../atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantsStateList);

  return (participantName: string) => {
    return setList(currentList => [...currentList, participantName]);
  }
}