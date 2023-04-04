import { useParams } from "react-router-dom";
import TituloPrincipal from "../../componentes/TituloPrincipal";

const Categoria = () => {
  const { slug } = useParams();


  return (
    <section>
      <TituloPrincipal>{slug}</TituloPrincipal>
    </section>
  );
}

export default Categoria;