import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import styled from "styled-components";
import { whiteBackground } from '../UI/Variables';
import Extract from "Components/Extract";

const Container = styled.div`
  background-color: ${whiteBackground};
  min-height: 90vh;
  padding: 0px 15vw;
`

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerWrapper = () => {
  // const username = prompt('Digite seu nome de usuário: ');


  return (
    <Container>
      <Titulo>
        {/*{`Olá, ${username}!`}*/}
        Olá, fulano
      </Titulo>
      <Content>
        <Conta />
        <Extract />
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
