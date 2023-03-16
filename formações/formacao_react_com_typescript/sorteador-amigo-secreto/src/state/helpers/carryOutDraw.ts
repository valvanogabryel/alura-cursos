import shuffle from "just-shuffle";

export default function carryOutDraw(participants: string[]) {
  const totalParticipants = participants.length;

  const shuffledList = shuffle(participants);

  const result = new Map<string, string>();

  for (let i = 0; i < totalParticipants; i++) {
    const friendsIndex = i === (totalParticipants - 1) ? 0 : i + 1;

    result.set(shuffledList[i], shuffledList[friendsIndex]);
  }

  return result;
}