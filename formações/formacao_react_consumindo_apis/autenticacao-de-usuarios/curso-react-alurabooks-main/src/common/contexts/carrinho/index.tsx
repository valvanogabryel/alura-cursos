import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../../interfaces/ICarrinho";
import { useCarrinho } from "../../../graphql/carrinho/hooks";
import { IItens } from "../../../interfaces/IItems";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItens) => void;
}

export const CarrinhoContext = createContext<ICarrinhoContext>({});

interface ICarrinhoProvider {
  children: ReactElement;
}

const CarrinhoProvider = ({ children }: ICarrinhoProvider) => {
  const { data } = useCarrinho();
  const carrinho = data?.carrinho;

  return (
    <CarrinhoContext.Provider value={{ carrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinhoContext = () => {
  return useContext<ICarrinhoContext>(CarrinhoContext);
}

export default CarrinhoProvider;