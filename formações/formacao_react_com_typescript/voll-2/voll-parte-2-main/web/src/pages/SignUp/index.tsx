import { Step, StepLabel, Stepper } from "@mui/material";
import logo from "./logo.png";
import styled from "styled-components";
import { FormEvent, useState } from "react";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import IClinic from "../../types/IClinic";
import usePost from "../../usePost";
import { useNavigate } from "react-router-dom";

interface CustomProps {
  color: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 1.5rem auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3.5rem;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cinza);
  width: 60%;
  text-align: center;
  margin: 2rem auto;
`;

const CustomStep = styled.div<CustomProps>`
  background-color: ${({ color }) => color};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
`;

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");

  const { signUpData } = usePost();

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const clinic: IClinic = {
      email,
      nome: name,
      senha: password,
      endereco: {
        cep,
        rua: street,
        numero: streetNumber,
        complemento: complement,
        estado: state,
      },
    };

    if (activeStep !== 0) {
      try {
        signUpData({
          endpoint: "clinica",
          data: clinic,
        });
        navigate("/login");
      } catch (error) {
        error && alert("Erro ao cadastrar os dados");
      }
    }

    setActiveStep(activeStep + 1);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo da Voll" />
      </Header>
      <Stepper
        activeStep={activeStep}
        style={{ maxWidth: "8rem", margin: "auto" }}
      >
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
        <Title>
          {activeStep === 0
            ? "Primeiro, alguns dados básicos:"
            : "Agora, os dados técnicos:"}
        </Title>

        <StyledForm onSubmit={handleSubmit}>
          {activeStep === 0 ? (
            <FirstStep
              name={name}
              setName={setName}
              cnpj={cnpj}
              setCnpj={setCnpj}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              repeatedPassword={repeatedPassword}
              setRepeatedPassword={setRepeatedPassword}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ) : (
            <SecondStep
              phone={phone}
              setPhone={setPhone}
              cep={cep}
              setCep={setCep}
              street={street}
              setStreet={setStreet}
              streetNumber={streetNumber}
              setStreetNumber={setStreetNumber}
              complement={complement}
              setComplement={setComplement}
              state={state}
              setState={setState}
            />
          )}
          {errorMessage && <span>{errorMessage}</span>}
        </StyledForm>
      </main>
    </Container>
  );
}
