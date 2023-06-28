import { Step, StepLabel, Stepper } from "@mui/material";
import logo from "./logo.png";
import styled from "styled-components";
import { useState } from "react";
import Botao from "../../components/Botao";

interface CustomProps {
  color: string;
}

const Image = styled.img`
  padding: 2em 0;
`;

const CustomStep = styled.div<CustomProps>`
  background-color: ${({ color }) => color};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
`;

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div>
        <Image src={logo} alt="Logo da Voll" />
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel
              StepIconComponent={() => <CustomStep color="lightblue" />}
            />
          </Step>
          <Step>
            <StepLabel
              StepIconComponent={(props) => (
                <CustomStep color={props.active ? "lightblue" : "lightgray"} />
              )}
            />
          </Step>
        </Stepper>

        {activeStep === 1 && (
          // PASSO 2 DO FORMULÁRIO
          <div>
            <h1>passo 2</h1>
          </div>
        )}

        <Botao
          onClick={() => {
            if (activeStep === 0) {
              setActiveStep(activeStep + 1);
            }
          }}
        >
          {activeStep === 1 ? "Cadastrar" : "Avançar"}
        </Botao>
      </div>
    </>
  );
}
