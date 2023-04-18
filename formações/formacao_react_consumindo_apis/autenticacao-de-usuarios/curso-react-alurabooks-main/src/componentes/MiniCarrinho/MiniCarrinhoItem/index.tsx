import { IItens } from '../../../interfaces/IItems';
import './MiniCarrinhoItem.css'

interface MiniCarrinhoItemProps {
  item: IItens;
}

const MiniCarrinhoItem = ({ item }: MiniCarrinhoItemProps) => {
  return (
    <div className="mini-carrinho-item">
      <h5>{item.livro.titulo}</h5>
      <h6>Autoria: {item.livro.autor.nome}</h6>
    </div>
  );
}

export default MiniCarrinhoItem