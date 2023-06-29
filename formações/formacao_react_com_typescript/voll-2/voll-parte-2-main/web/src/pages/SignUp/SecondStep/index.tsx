import { useState } from "react";
import Botao from "../../../components/Botao";
import { InputField } from "../../../components/InputField";

export function SecondStep() {
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");

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
      <div>
        <span>Endereço</span>

        <InputField
          type="number"
          placeholder="Insira o CEP"
          value={cep}
          onChange={setCep}
          label="CEP"
          required
        />
      </div>
      <div>
        <span>Endereço</span>

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
      </div>

      <Botao type="submit" width="280px">
        Cadastrar
      </Botao>
    </>
  );
}
