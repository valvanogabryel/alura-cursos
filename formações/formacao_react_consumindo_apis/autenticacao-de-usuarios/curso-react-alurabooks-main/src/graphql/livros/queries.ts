import { gql } from '@apollo/client';

export const OBTER_LIVROS = gql`
  query ObterLivros ($categoriaId: Int, $titulo: String) {
	  livros (categoriaId: $categoriaId, titulo: $titulo) {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
      }
    }  
  }
`;

export const OBTER_LIVROS_DESTAQUE = gql`
query ObterLivrosDestaque {
  destaques {
   		lancamentos {
      imagemCapa
      autorId
      titulo
      descricao
			opcoesCompra {
        id
        preco
      }
      autor {
        nome
      }
    }
    maisVendidos {
      imagemCapa
      autorId
      titulo
      descricao
			opcoesCompra {
        id
        preco
      }
    }
    autor {
      nome
    }
  }
}`

export const OBTER_DETALHES_LIVRO = gql`
query ObterDetalhesLivro ($slug: String!) {
  livro (slug: $slug) {
    id
    titulo
    descricao
    sobre
    imagemCapa
    opcoesCompra {
      preco
      id
      titulo
      formatos 
    }
    autor {
      nome
      sobre
    }
    tags {
      nome
    }
  }
}
`

/*

*/
