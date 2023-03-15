import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import Footer from "./Footer";

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn()
  }
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
});

describe('quando não há participantes o suficiente', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('quando há participantes o suficiente', () => {
  // const once = 1;

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(['Gabryel', 'Fellype', 'José']);
  })

  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('a bricadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});

