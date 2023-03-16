import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import Raffle from "./Raffle"

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn()
  }
});

describe('na pagina de sorteio', () => {
  const participants = [
    'Gabryel',
    'Fellype',
    'Jucyara'
  ];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole('option');

    expect(options).toHaveLength(participants.length);
  });
});