import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 1.5rem auto;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 0.05;
`;

const StyledLink = styled.a`
  font-family: var(--fonte-principal);
  font-weight: 700;
  color: var(--azul-escuro);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo da Voll" />

      <Container>
        <img src={perfil} alt="imagem de perfil do usuário" />
        <StyledLink href="/">Sair</StyledLink>
      </Container>
    </StyledHeader>
  );
}
