import carryOutDraw from "./carryOutDraw";

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não pode sortear o próprio nome', () => {
    const participants = [
      'Gabryel',
      'Fellype',
      'Jucyara',
      'Joaquim',
      'Mariana',
      'Júlia'
    ];

    const raffle = carryOutDraw(participants);
    participants.forEach(participant => {
      const secretFriend = raffle.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});