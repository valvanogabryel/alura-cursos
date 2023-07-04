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
import styled, { keyframes } from "styled-components";

import { ModalForm } from "./ModalForm";
import Botao from "../../../components/Botao";

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
  padding: 1rem 5rem;
  width: 50vw;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${appear} 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  div {
    justify-content: center;
    animation: ${scaleUp} 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
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
  return (
    <Modal open={open} onClose={handleClose}>
      <CustomBox>
        <Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>

        <form>
          <ModalForm />
          <ToggleWrapper>
            <StyledParagraph>Atende por plano?</StyledParagraph>
            <IOSSwitch lang="pt-BR" />
            <span>Não/Sim</span>
          </ToggleWrapper>
          <div>
            <StyledParagraph>Selecione os planos: </StyledParagraph>
            <CustomFormGroup>
              <FormControlLabel
                control={<CustomCheckbox />}
                label="Sulamerica"
              />
              <FormControlLabel control={<CustomCheckbox />} label="Unimed" />
              <FormControlLabel control={<CustomCheckbox />} label="Bradesco" />
              <FormControlLabel control={<CustomCheckbox />} label="Amil" />
              <FormControlLabel control={<CustomCheckbox />} label="Biosaúde" />
              <FormControlLabel control={<CustomCheckbox />} label="Biovida" />
              <FormControlLabel control={<CustomCheckbox />} label="Outro" />
            </CustomFormGroup>
          </div>
          <Botao width="280px">Cadastrar</Botao>
        </form>
      </CustomBox>
    </Modal>
  );
}
