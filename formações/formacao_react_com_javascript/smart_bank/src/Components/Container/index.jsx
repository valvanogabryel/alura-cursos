import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import styled from "styled-components";
import { whiteBackground } from '../UI/Variables';

const Container = styled.div`
  background-color: ${whiteBackground};
  min-height: 90vh;
  padding: 0px 15vw;
`

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


const ContainerWrapper = () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
