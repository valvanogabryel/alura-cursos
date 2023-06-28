import { Outlet } from "react-router-dom";
import backgroundImage from "./backgroundImage.png";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 50vw;
  height: 100%;
`;

export default function FormBasePage() {
  return (
    <MainContainer>
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
}
