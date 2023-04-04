import { useEffect, useState } from "react"
import { ICategoria } from "../interfaces/ICategoria";
import http from "../http";

const useCategorias = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    obterCategorias();
  }, []);

  function obterCategorias() {
    http.get<ICategoria[]>('categorias')
      .then(res => {
        setCategorias(res.data);
      });
  }

  return categorias;
}

export default useCategorias;