import { gql } from "@apollo/client";

export const OBTER_CARRINHO = gql`
query ObterCarrinho {
  carrinho {
    total
    itens {
      quantidade
  		opcaoCompra {
        preco
        id
      }
      livro {
        titulo
        descricao
      	imagemCapa
      	autor{
        	nome
      	}
      }
    }
  }
}
`

export const ADICIONAR_ITEM = gql`
mutation AdicionarItemCarrihno ($item: ItemCarrinhoInput!) {
  adicionarItem(item: $item)
}
`