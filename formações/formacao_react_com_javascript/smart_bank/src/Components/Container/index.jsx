import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import styled from "styled-components";
import Extract from "Components/Extract";

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
  `

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerWrapper = () => {
  return (
    <Container>
      <Titulo>
        Olá, Fulano!
      </Titulo>
      <Content>
        <Conta />
        <Extract />
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
