import { useState } from "react";
import { InputField } from "../../../../components/InputField";
import locationIcon from "../location_on.png";
import styled from "styled-components";

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

export function ModalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [crm, setCrm] = useState("");
  const [phone, setPhone] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <InputField
        type="text"
        value={name}
        onChange={setName}
        placeholder="Digite o nome da clínica"
        label="Nome"
        required
      />
      <InputField
        type="email"
        placeholder="Insira o endereço de e-mail para login"
        value={email}
        onChange={setEmail}
        label="Email"
        required
      />
      <InputField
        type="password"
        placeholder="Digite sua senha"
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
        placeholder="Digite o CPNJ"
        value={specialty}
        onChange={setSpecialty}
        label="CNPJ"
        required
      />
      <InputField
        type="number"
        placeholder="Digite o CPNJ"
        value={crm}
        onChange={setCrm}
        label="CNPJ"
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
        placeholder="Digite o CPNJ"
        value={imageURL}
        onChange={setImageURL}
        label="CNPJ"
        required
      />

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
    </>
  );
}
