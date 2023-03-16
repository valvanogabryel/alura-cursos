import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { useParticipantsList } from "./useParticipantsList"
import shuffle from "just-shuffle";

export const useRaffle = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const totalParticipants = participants.length;

    const shuffledList = shuffle(participants);

    const result = new Map<string, string>();

    for (let i = 0; i < totalParticipants; i++) {
      const friendsIndex = i === (totalParticipants - 1) ? 0 : i + 1;

      result.set(shuffledList[i], shuffledList[friendsIndex]);

    }
    setResult(result);
  }
}