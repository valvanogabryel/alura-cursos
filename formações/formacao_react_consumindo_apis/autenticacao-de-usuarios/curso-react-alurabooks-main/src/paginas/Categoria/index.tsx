import { useParams } from "react-router-dom";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { useEffect, useState } from "react";
import { ICategoria } from "../../interfaces/ICategoria";
import http from "../../http";
import Loader from "../../componentes/Loader";

const Categoria = () => {
  const [categoria, setCategoria] = useState<ICategoria>();
  const [carregando, setCarregando] = useState<boolean>(true);

  const { slug } = useParams();

  // useEffect(() => {
  //   http.get<ICategoria[]>('categorias', {
  //     params: {
  //       slug
  //     }
  //   })
  //     .then(res => {
  //       setCategoria(res.data[0]);
  //     });
  // }, [slug]);

  useEffect(() => {
    setCarregando(true);
    http.get<ICategoria[]>(`categorias?slug=${slug}`)
      .then(res => {
        setCategoria(res.data[0]);
        setCarregando(false);
      })
  }, [slug]);

  if (carregando) return <Loader />

  return (
    <section>
      <TituloPrincipal>{categoria?.nome}</TituloPrincipal>
      {

      }
    </section>
  );
}

export default Categoria;