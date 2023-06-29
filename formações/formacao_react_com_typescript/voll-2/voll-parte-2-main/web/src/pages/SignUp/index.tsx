import { Step, StepLabel, Stepper } from "@mui/material";
import logo from "./logo.png";
import styled from "styled-components";
import { useState } from "react";
import Botao from "../../components/Botao";
import { InputField } from "../../components/InputField";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";

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
    <section>
      <header>
        <Image src={logo} alt="Logo da Voll" />
      </header>
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

      <main>
        <h2>
          {activeStep === 0
            ? "Primeiro, alguns dados básicos:"
            : "Agora, os dados técnicos"}
        </h2>

        <form>
          {activeStep === 0 ? (
            <FirstStep {...{ activeStep, setActiveStep }} />
          ) : (
            <SecondStep />
          )}
        </form>
      </main>
    </section>
  );
}
