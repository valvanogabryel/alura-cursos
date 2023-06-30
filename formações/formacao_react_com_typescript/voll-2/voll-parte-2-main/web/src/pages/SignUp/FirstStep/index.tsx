import { useState } from "react";
import Botao from "../../../components/Botao";
import { InputField } from "../../../components/InputField";

export function FirstStep() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

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
        type="number"
        placeholder="Digite o CPNJ"
        value={cnpj}
        onChange={setCnpj}
        label="CNPJ"
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
      <Botao type="submit" width="280px">
        Avançar
      </Botao>
    </>
  );
}
