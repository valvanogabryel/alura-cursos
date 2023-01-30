import React from "react";
import bank_logo from "assets/images/bank_logo.svg";

import styled from "styled-components";
import { primaryColor } from '../UI/Variables';

const StyledHeader = styled.nav`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  user-select: none;
`
const PrimaryButton = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: white;
  background: transparent;
`

const SecondaryButton = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: white;
  color: #41d3be;
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo
        src={bank_logo}
        alt="Logo Smart Bank"
      />
      <div>
        <PrimaryButton href="https://google.com">
          Ajuda
        </PrimaryButton>
        <SecondaryButton href="https://google.com">
          Sair
        </SecondaryButton>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
