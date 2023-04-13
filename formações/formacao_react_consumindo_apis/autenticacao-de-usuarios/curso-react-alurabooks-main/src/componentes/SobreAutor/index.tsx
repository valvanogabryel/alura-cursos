import { useQuery } from "@tanstack/react-query";
import { obterAutor } from "../../http";
import BlocoSobre from "../BlocoSobre";

interface SobreAutorProps {
  idAutor?: number
}

const SobreAutor = ({ idAutor }: SobreAutorProps) => {
  const { data: autor } = useQuery(['autor', idAutor], () => obterAutor(idAutor));
  return <BlocoSobre
    titulo={'Sobre o Autor'}
    corpo={autor?.sobre}
  />;
}

export default SobreAutor;