import React, { useState } from "react";
import styled from "styled-components";

import privado from "assets/images/privado.svg";
import olho_icone from "assets/images/olho.svg";
import dinheiro from "assets/images/dinheiro.svg";

import {
  Icon,
  Box,
  Button,
  Balance,
  Detail,
  ThemeIcon
} from "Components/UI";

const MarginIcon = styled(Icon)`
  margin-top: 2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <ThemeIcon
            src={dinheiro}
            alt="Ícone Saldo"
          />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : <Balance>
          <Detail>R$</Detail> ****{" "}
        </Balance>
        }
      </div>

      <Button onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
