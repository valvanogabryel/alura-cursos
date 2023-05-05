import { getAllByRole, render, screen } from "@testing-library/react";
import Menu from './index';

// ? Métodos de consulta
// !getBy:  
//* Este método é usado para selecionar um elemento com base em um seletor específico. Ele retorna o primeiro elemento que corresponde ao seletor fornecido e, se nenhum elemento for encontrado, ele lançará um erro. Este método é mais adequado para quando você espera que o elemento selecionado esteja presente no componente.

// !getAllBy:
//* Semelhante ao método getBy, este método é usado para selecionar vários elementos com base em um seletor. Ele retorna todos os elementos que correspondem ao seletor fornecido e, se nenhum elemento for encontrado, ele lançará um erro.

// !queryBy:
//* este método é semelhante ao método getBy, mas retorna null em vez de lançar um erro quando nenhum elemento é encontrado com base no seletor fornecido. Este método é mais adequado para quando você está procurando por um elemento que pode ou não estar presente no componente.

// !queryAllBy:
// * semelhante ao método queryBy, este método é usado para selecionar vários elementos com base em um seletor e retorna um array vazio se nenhum elemento for encontrado.

// !findBy:
// * este método é semelhante ao método getBy, mas é usado para selecionar elementos que podem não estar presentes no componente imediatamente após a renderização. Ele retorna um elemento que corresponde ao seletor fornecido e, se nenhum elemento for encontrado, ele aguarda até que um elemento correspondente seja adicionado ao DOM. Este método usa a API async/await e retorna uma Promise.

// !findAllBy:
// * semelhante ao método findBy, este método é usado para selecionar vários elementos que podem não estar presentes imediatamente após a renderização do componente. Ele retorna um array de elementos que correspondem ao seletor fornecido e aguarda até que pelo menos um elemento correspondente seja adicionado ao DOM. Este método também usa a API async/await e retorna uma Promise.



test('Should render the homepage link', () => {
  render(<Menu/>);
  const link = screen.getByText('Inicial');
  expect(link).toBeInTheDocument();
});

test('Should render a links list', () => {
  render(<Menu/>);
  const linksList = screen.getAllByRole('link');
  expect(linksList).toHaveLength(4);
});

test('Should not render a link for extract', () => {
  render(<Menu/>);
  const extractLink = screen.queryByText('Extrato');
  expect(extractLink).toBe(null);
  // ambos são iguais, mas manterei aqui para mostrar diferentes formas de fazer.
  expect(extractLink).not.toBeInTheDocument();
});

test('should render a list of links that contains the class name "link"', () => {
  render(<Menu/>);
  const links = screen.getAllByRole('link');
  links.forEach(link => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
})