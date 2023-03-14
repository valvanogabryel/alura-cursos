import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );

  //? Encontrar no DOM o input;
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  // Encontrar o botão;
  const button = screen.getByRole('button');
  //? Garantir que o input esteja no documento;
  expect(input).toBeInTheDocument();
  //? Garantir que o botão esteja desabilitado;
  expect(button).toBeDisabled();
});

// Estrutura AAA (Arrange, Act, Assert):
/* test('um nome que que descreve o que vamos testar', () => {
  * arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)

      * agimos (realizamos clicks, definimos valores)

      * afirmamos o que queremos (onde realizamos as expectativas)
});*/

test('adicionar um participante quando o campo de participantes tiver preenchido', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
  //? Encontrar no DOM o input;
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  const button = screen.getByRole('button');
  // ? Inserir um valor no input;
  fireEvent.change(input, {
    target: {
      value: 'Gabryel Valvano'
    }
  });
  // ? Clicar no botão de submeter;
  fireEvent.click(button);
  // ? Garantir que o input esteja com o foco ativo;
  expect(input).toHaveFocus();
  // ? Garantir que o input não tenha um valor;
  expect(input).toHaveValue('');
});

test('adicionar um participante já existente', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const button = screen.getByRole('button');

  fireEvent.change(input, {
    target: {
      value: 'Gabryel Valvano'
    }
  });
  fireEvent.click(button);
  fireEvent.change(input, {
    target: {
      value: 'Gabryel Valvano'
    }
  });
  fireEvent.click(button);

  const errorMessage = screen.getByRole('alert');

  expect(errorMessage.textContent).toBe('Nomes duplicados não podem ser adicionados!');
});

