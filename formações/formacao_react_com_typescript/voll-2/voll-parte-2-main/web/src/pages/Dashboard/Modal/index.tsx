import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Switch,
  SwitchProps,
} from "@mui/material";
import Titulo from "../../../components/Titulo";

import { ModalForm } from "./ModalForm";
import Botao from "../../../components/Botao";
import IProfissional from "../../../types/IProfissional";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import usePost from "../../../usePost";
import authStore from "../../../stores/auth.store";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: "3.75rem",
  height: "2rem",
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0.3,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(100%)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#EFEFEF",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "white",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: "1.5rem",
    height: "1.5rem",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#EFEFEF",
    opacity: 1,
    transition: "0.5s",
  },
}));

const scaleUp = keyframes`
  from {
    transform: scale(0); 
    
  } to {
    transform: scale(1);
  }
 `;

const appear = keyframes`
  from {
    height: 0;
    
  } to {
    height: 100%;
  }
 `;

const CustomBox = styled(Box)`
  background-color: white;
  position: fixed;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 16px;
  padding: 1rem 5.75rem;
  width: 50vw;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${appear} 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  div {
    justify-content: center;
    animation: ${scaleUp} 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  label.switch-label {
    color: var(--cinza);
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledParagraph = styled.p`
  font-weight: 700;
  color: var(--azul-escuro);
`;

const CustomFormGroup = styled(FormGroup)`
  label {
    color: var(--cinza);
  }
`;

const CustomCheckbox = styled(Checkbox)`
  padding: 4px;

  &.Mui-checked {
    color: #0b3b60 !important;
  }
`;

export function ModalSignUp({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [crm, setCrm] = useState("");
  const [meetsByPlan, setMeetsByPlan] = useState(false);
  const [checkedPlans, setCheckedPlans] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");

  const { signUpData } = usePost();
  const { user } = authStore;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const professional: IProfissional = {
      nome: name,
      crm,
      imagem: imageURL,
      especialidade: specialty,
      possuiPlanoSaude: meetsByPlan,
      senha: password,
      planosSaude: checkedPlans,
      estaAtivo: true,
      email,
      telefone: phone,
      endereco: {
        cep,
        rua: street,
        estado: state,
        numero: streetNumber,
        complemento: complement,
      },
    };

    await signUpData({
      endpoint: "especialista",
      data: professional,
      token: user.token,
    });
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedPlans((prevChecked) => [...prevChecked, value]);
    } else {
      setCheckedPlans((prevChecked) =>
        prevChecked.filter((plan) => plan !== value)
      );
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <CustomBox>
        <Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>

        <form onSubmit={handleSubmit}>
          <ModalForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            repeatedPassword={repeatedPassword}
            setRepeatedPassword={setRepeatedPassword}
            specialty={specialty}
            setSpecialty={setSpecialty}
            crm={crm}
            setCrm={setCrm}
            phone={phone}
            setPhone={setPhone}
            imageURL={imageURL}
            setImageURL={setImageURL}
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
          <ToggleWrapper>
            <StyledParagraph>Atende por plano?</StyledParagraph>
            <IOSSwitch
              lang="pt-BR"
              onChange={() => setMeetsByPlan(!meetsByPlan)}
            />
            <label className="switch-label">Não/Sim</label>
          </ToggleWrapper>
          <div>
            <StyledParagraph>Selecione os planos: </StyledParagraph>
            <CustomFormGroup>
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Sulamerica"
                value="1"
              />
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Unimed"
                value="2"
              />
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Bradesco"
                value="3"
              />
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Amil"
                value="4"
              />
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Biosaúde"
                value="5"
              />
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Biovida"
                value="6"
              />
              <FormControlLabel
                control={<CustomCheckbox onChange={handleCheckboxChange} />}
                label="Outro"
                value="7"
              />
            </CustomFormGroup>
          </div>
          <Botao width="280px">Cadastrar</Botao>
        </form>
      </CustomBox>
    </Modal>
  );
}
