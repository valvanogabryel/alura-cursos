import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../../interfaces/ICarrinho";
import { useAdicionarItem, useCarrinho } from "../../../graphql/carrinho/hooks";
import { IItens } from "../../../interfaces/IItems";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItens) => void;
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
  adicionarItemCarrinho: () => null
});

interface ICarrinhoProvider {
  children: ReactElement;
}

const CarrinhoProvider = ({ children }: ICarrinhoProvider) => {
  const { data } = useCarrinho();
  const carrinho = data?.carrinho;

  const [adicionar] = useAdicionarItem();

  const adicionarItemCarrinho = (item: IItens) => {
    adicionar({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra.id,
          quantidade: item.quantidade
        }
      }
    });
  }

  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      adicionarItemCarrinho
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinhoContext = () => {
  return useContext<ICarrinhoContext>(CarrinhoContext);
}

export default CarrinhoProvider;