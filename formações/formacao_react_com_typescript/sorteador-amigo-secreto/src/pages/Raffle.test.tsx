import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil"
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { useRaffleResult } from "../state/hooks/useRaffleResult";
import Raffle from "./Raffle"

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn()
  }
});

jest.mock('../state/hooks/useRaffleResult', () => {
  return {
    useRaffleResult: jest.fn()
  }
});

describe('na pagina de sorteio', () => {
  const participants = [
    'Gabryel',
    'Fellype',
    'Jucyara'
  ];

  const result = new Map([
    ['Gabryel', 'Gilvan'],
    ['Fellype', 'Gabryel'],
    ['Jucyara', 'Fellype']
  ]);

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useRaffleResult as jest.Mock).mockReturnValue(result);
  });

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole('option');

    expect(options).toHaveLength(participants.length + 1); //vem uma opção por padrão
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    const button = screen.getByRole('button');

    fireEvent.change(select, {
      target: {
        value: participants[0]
      }
    });
    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');

    expect(secretFriend).toBeInTheDocument();
  });

  test('o nome do amigo deve sumir após cinco segundos', () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    const button = screen.getByRole('button');

    fireEvent.change(select, {
      target: {
        value: participants[2]
      }
    });
    fireEvent.click(button);

    act(() => {
      jest.runAllTimers();
    });

    const secretFriend = screen.queryByRole('alert');
    expect(secretFriend).not.toBeInTheDocument();
  });
});