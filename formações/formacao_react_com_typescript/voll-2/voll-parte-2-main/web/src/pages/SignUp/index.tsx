import { Step, StepLabel, Stepper } from "@mui/material";
import logo from "./logo.png";

export default function SignUp() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo da Voll" />
        <Stepper>
          <Step>
            <StepLabel />
          </Step>
          <Step>
            <StepLabel />
          </Step>
        </Stepper>
      </div>
    </>
  );
}
