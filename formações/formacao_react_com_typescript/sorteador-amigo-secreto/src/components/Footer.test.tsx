import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";

describe('quando não há participantes o suficiente', () => {
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
  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });
});

