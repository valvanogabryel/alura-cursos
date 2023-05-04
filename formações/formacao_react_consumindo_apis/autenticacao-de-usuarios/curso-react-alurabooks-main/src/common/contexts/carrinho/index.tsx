import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../../interfaces/ICarrinho";
import { useAdicionarItem, useCarrinho, useRemoverItem } from "../../../graphql/carrinho/hooks";
import { IItens } from "../../../interfaces/IItems";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItens) => void;
  removerItemCarrinho: (item: IItens) => void;
  loading: boolean;
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
  adicionarItemCarrinho: () => null,
  removerItemCarrinho: () => null,
  loading: false,
});

interface ICarrinhoProvider {
  children: ReactElement;
}

const CarrinhoProvider = ({ children }: ICarrinhoProvider) => {
  const { data, loading: loadingCarrinho } = useCarrinho();
  const carrinho = data?.carrinho;

  const [adicionar, { loading: loadingAdicionar }] = useAdicionarItem();
  const [remover] = useRemoverItem();

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

  const removerItemCarrinho = (item: IItens) => {
    remover({
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
      adicionarItemCarrinho,
      removerItemCarrinho,
      loading: loadingCarrinho || loadingAdicionar
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinhoContext = () => {
  return useContext<ICarrinhoContext>(CarrinhoContext);
}

export default CarrinhoProvider;