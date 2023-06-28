import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

const Botao = styled.button<ButtonProps>`
  background-color: var(--azul-escuro);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  border: none;
  width: ${({ width }) => width || "auto"};
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: #0f558b;
  }
`;

export default Botao;
