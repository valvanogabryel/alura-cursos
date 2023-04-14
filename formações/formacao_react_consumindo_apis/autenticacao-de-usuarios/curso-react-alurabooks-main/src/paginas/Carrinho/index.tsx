import TituloPrincipal from "../../componentes/TituloPrincipal";
import { useCarrinho } from "../../graphql/carrinho/hooks";

const Carrinho = () => {
  const { data } = useCarrinho();
  const carrinho = { ...data?.carrinho };

  console.log(carrinho);


  return (
    <>
      <TituloPrincipal>Carrinho</TituloPrincipal>
      <h2>Total: {carrinho.total}</h2>
      <ul>
        {
          carrinho.itens.map((item: any) => (
            <li>
              Título: {item.livro.titulo}
              Descrição: {item.livro.descricao}
              Quantidade: {item.quantidade}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Carrinho;