import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

export function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <StyledListItem>
          <a href="/">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </StyledListItem>
      </StyledList>
      <p>
        2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </p>
    </StyledFooter>
  );
}
