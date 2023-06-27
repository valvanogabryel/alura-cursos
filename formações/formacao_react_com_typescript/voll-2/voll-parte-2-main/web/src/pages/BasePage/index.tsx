import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export default function BasePage() {
  return (
    <>
      <Cabecalho />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Rodape />
    </>
  );
}
