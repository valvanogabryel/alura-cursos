import { useState } from "react";
import { InputField } from "../../../../components/InputField";
import locationIcon from "../location_on.png";
import styled from "styled-components";
import IProfissional from "../../../../types/IProfissional";
import { log } from "console";

interface ModalFormProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  repeatedPassword: string;
  setRepeatedPassword: (value: string) => void;
  specialty: string;
  setSpecialty: (value: string) => void;
  crm: string;
  setCrm: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  imageURL: string;
  setImageURL: (value: string) => void;
  cep: string;
  setCep: (value: string) => void;
  street: string;
  setStreet: (value: string) => void;
  streetNumber: string;
  setStreetNumber: (value: string) => void;
  complement: string;
  setComplement: (value: string) => void;
  state: string;
  setState: (value: string) => void;
}

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: 0.3s all;
  height: 48px;

  img {
    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    object-fit: contain;
    height: 1.25rem;
    width: 1.5rem;
  }

  &:focus-within {
    div {
      img {
        transform: scale(1.1);
      }
    }
  }

  div {
    background-color: #ededed;
    padding: 1rem;
    border-radius: 8px 0 0 8px;
    height: 1rem;
  }

  input {
    padding: 1rem 1rem 1rem 0.75rem;
    outline: none;
    border: none;
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 0 8px 8px 0;

    &::placeholder {
      font-size: 1rem;
      color: var(--cinza);
    }
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  color: var(--azul-escuro);
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 25%;
  grid-template-rows: repeat(2, 50%);
  column-gap: 2rem;
  margin-top: 1.5rem;
`;

export function ModalForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  repeatedPassword,
  setRepeatedPassword,
  specialty,
  setSpecialty,
  crm,
  setCrm,
  phone,
  setPhone,
  imageURL,
  setImageURL,
  cep,
  setCep,
  street,
  setStreet,
  streetNumber,
  setStreetNumber,
  complement,
  setComplement,
  state,
  setState,
}: ModalFormProps) {
  return (
    <>
      <InputField
        type="text"
        value={name}
        onChange={setName}
        placeholder="Digite seu nome completo"
        label="Nome"
        required
      />
      <InputField
        type="email"
        placeholder="Insira o endereço de email"
        value={email}
        onChange={setEmail}
        label="Email"
        required
      />
      <InputField
        type="password"
        placeholder="Crie uma senha"
        value={password}
        onChange={setPassword}
        label="Crie uma senha"
        required
      />
      <InputField
        type="password"
        placeholder="Repita a senha anterior"
        value={repeatedPassword}
        onChange={setRepeatedPassword}
        label="Repita a senha"
        required
      />
      <InputField
        type="string"
        placeholder="Qual sua especialidade?"
        value={specialty}
        onChange={setSpecialty}
        label="Especialidade"
        required
      />
      <InputField
        type="number"
        placeholder="Insia seu número de registro"
        value={crm}
        onChange={setCrm}
        label="CRM"
        required
      />
      <InputField
        type="phone"
        placeholder="(DDD) XXXXX-XXXX"
        value={phone}
        onChange={setPhone}
        label="Telefone"
        required
      />
      <InputField
        type="string"
        placeholder="https://img.com/fotos/retrato-de-um-jovem-medico"
        value={imageURL}
        onChange={setImageURL}
        label="Insira o URL da imagem"
        required
      />

      <Label>Endereço</Label>
      <StyledInput>
        <div>
          <img src={locationIcon} alt="" />
        </div>
        <input
          type="number"
          placeholder="Insira o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </StyledInput>

      <Grid>
        <InputField
          type="address"
          placeholder="Rua"
          value={street}
          onChange={setStreet}
          required
        />
        <InputField
          type="number"
          placeholder="Número"
          value={streetNumber}
          onChange={setStreetNumber}
          required
        />
        <InputField
          type="text"
          placeholder="Complemento"
          value={complement}
          onChange={setComplement}
        />
        <InputField
          type="text"
          placeholder="Estado"
          value={state}
          onChange={setState}
          required
        />
      </Grid>
    </>
  );
}
