import Botao from "../../../components/Botao";
import { InputField } from "../../../components/InputField";
import locationIcon from "./location_on.png";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  color: var(--azul-escuro);
`;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 50% 50%;
  width: 100%;
  gap: 0.5rem;
  margin: 1.5rem auto;

  div {
    &:last-child {
      margin-top: -1rem;
      margin-bottom: 1rem;
    }
  }
`;

export function SecondStep({
  phone,
  setPhone,
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
}: any) {
  return (
    <>
      <InputField
        type="phone"
        placeholder="(DDD) XXXXX-XXXX"
        value={phone}
        onChange={setPhone}
        label="Telefone"
        required
      />
      <div style={{ width: "100%" }}>
        <div>
          <Label>Endereço</Label>

          <p>
            <Label>CEP</Label>
          </p>
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
        </div>
        <div>
          <Label>Endereço</Label>

          <InputField
            type="address"
            placeholder="Rua"
            value={street}
            onChange={setStreet}
            required
          />
          <Grid>
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
        </div>
      </div>

      <Botao type="submit" width="280px">
        Cadastrar
      </Botao>
    </>
  );
}
