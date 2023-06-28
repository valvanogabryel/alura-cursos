import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";
import searchIcon from "./assets/search.png";
import { useLocation } from "react-router-dom";
import Botao from "../Botao";

const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 7.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 920px) {
    padding: 1.5rem 3.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkEstilizado = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

const HomeHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    list-style-type: none;

    a {
      color: var(--azul-escuro);
      text-decoration: none;
      transition: 0.1s linear;

      &:hover {
        text-decoration: underline;
        color: var(--azul-claro);
      }
    }
  }
`;

const StyledSearchWrapper = styled.div`
  display: flex;

  input {
    border: 1px solid var(--cinza);
    border-radius: 8px;
    padding: 0.88rem 1rem;
    background-image: url(${searchIcon});
    background-position: right center;
    background-repeat: no-repeat;
    background-origin: content-box;

    &::placeholder {
      font-size: 1rem;
      color: var(--cinza);
    }

    &:focus {
      outline: none;
    }
  }
`;

function Cabecalho() {
  const { pathname } = useLocation();

  return (
    <CabecalhoEstilizado>
      <img src={logo} alt="logo da empresa Voll" />
      <Container>
        {pathname === "/dashboard" ? (
          <>
            <img src={perfil} alt="imagem de perfil do usuário" />
            <LinkEstilizado href="#">Sair</LinkEstilizado>
          </>
        ) : (
          <HomeHeaderWrapper>
            <StyledList>
              <li>
                <a href="/about">Sobre</a>
              </li>
              <li>
                <a href="/sing-up">Cadastrar-se</a>
              </li>
            </StyledList>
            <StyledSearchWrapper>
              <input type="search" placeholder="Digite sua busca" />
            </StyledSearchWrapper>

            <a href="/login">
              <Botao>Login</Botao>
            </a>
          </HomeHeaderWrapper>
        )}
      </Container>
    </CabecalhoEstilizado>
  );
}

export default Cabecalho;
