import { useParams } from "react-router-dom";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { obterCategoriaPorSlug } from "../../http";
import Loader from "../../componentes/Loader";
import { useQuery } from "@tanstack/react-query";
import ListaLivros from "../../componentes/ListaLivros";

const Categoria = () => {
  const { slug } = useParams();
  const {
    data: categoria,
    isLoading
  } = useQuery(['categoriaSlug', slug], () => obterCategoriaPorSlug(slug || ''));

  if (isLoading) return <Loader />

  return (
    <section>
      <TituloPrincipal>{categoria?.nome}</TituloPrincipal>
      <ListaLivros categoria={categoria!} />
    </section>
  );
}

export default Categoria;