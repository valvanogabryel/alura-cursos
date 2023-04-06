import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import MinhaConta from "../paginas/MinhaConta"
import Pedidos from "../paginas/MinhaConta/Pedidos"
import Categoria from "../paginas/Categoria"
import DetalhesLivro from "../paginas/DetalhesLivro"

const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/minha-conta' element={<MinhaConta />}>
          <Route path="pedidos" element={<Pedidos />} />
        </Route>
        <Route path="/categorias/:slug" element={<Categoria />} />
        <Route path="/livro/:slug" element={<DetalhesLivro />} />
      </Route>
    </Routes>
  );
}

export default Rotas