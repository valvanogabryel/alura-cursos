import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import ParticipantsList from "./ParticipantsList";

jest.mock(('../state/hooks/useParticipantsList'), () => {
  return {
    useParticipantsList: jest.fn()
  }
});

describe('uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  test('não deve conter elementos ao ser renderizada', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');

    expect(items).toHaveLength(0);
  });
});

describe('uma lista preenchida de participantes', () => {
  const participants = ['Gabryel', 'Fellype'];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  test('deve conter elementos ao ser renderizada', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');

    expect(items).toHaveLength(participants.length);
  })
})