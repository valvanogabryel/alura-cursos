import { AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";
import Banner from "../../componentes/Banner";
import LivrosDestaque from "../../componentes/LivrosDestaque";
import Newsletter from "../../componentes/Newsletter";
import TagsCategorias from "../../componentes/TagsCategorias";
import Titulo from "../../componentes/Titulo";
import { useQuery } from '@apollo/client';
// import { useQuery } from "@tanstack/react-query";
// import { obterLivrosDestaques } from "../../http";
import './Home.css';
import { gql } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";

const OBTER_LANCAMENTOS = gql`
query ObterLivrosLancamento {
  destaques {
    lancamentos {
      imagemCapa
      autorId
      titulo
      descricao
			opcoesCompra {
        preco
      }
    }
  }
}
`

const OBTER_MAIS_VENDIDOS = gql`
query ObterLivrosMaisVendidos {
  destaques {
    maisVendidos {
      imagemCapa
      autorId
      titulo
      descricao
			opcoesCompra {
        preco
    }
  }
}
`


const Home = () => {
  const [busca, setBusca] = useState("");

  // const { data: lancamentos } = useQuery(['destaques'], () => obterLivrosDestaques('lancamentos'));
  // const { data: maisVendidos } = useQuery(['maisVendidos'], () => obterLivrosDestaques('mais-vendidos'));

  const { data } = useQuery<{ lancamentos: ILivro[] }>(OBTER_LANCAMENTOS);
  const lancamentos = data?.lancamentos;


  return (
    <section className="home">
      <Banner subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!" titulo="Já sabe por onde começar?">
        <form className="buscar">
          <AbCampoTexto
            placeholder="Qual será sua próxima leitura?"
            value={busca}
            onChange={setBusca}
            darkmode={true}
            placeholderAlign="center"
          />
        </form>
      </Banner>
      <Titulo texto="ÚLTIMOS LANÇAMENTOS" />
      <LivrosDestaque livros={lancamentos ?? []} />
      <Titulo texto="MAIS VENDIDOS" />
      {/* <LivrosDestaque livros={maisVendidos ?? []} /> */}
      <TagsCategorias />
      <Newsletter />
    </section>
  );
}

export default Home