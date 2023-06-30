import Botao from "../../../components/Botao";
import { InputField } from "../../../components/InputField";

export function FirstStep({
  name,
  cnpj,
  email,
  password,
  repeatedPassword,
  setName,
  setCnpj,
  setEmail,
  setPassword,
  setRepeatedPassword,
  activeStep,
  setActiveStep,
}: any) {
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
      <Botao
        type="button"
        width="280px"
        onClick={() => setActiveStep(activeStep + 1)}
      >
        Avançar
      </Botao>
    </>
  );
}
