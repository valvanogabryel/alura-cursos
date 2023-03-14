import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorMessage, participantsStateList } from "../atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantsStateList);
  const list = useRecoilValue(participantsStateList);
  const setError = useSetRecoilState(errorMessage);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError('Nomes duplicados não podem ser adicionados!');
      return;
    }
    return setList(currentList => [...currentList, participantName]);
  }
}