import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import Botao from "../../components/Botao";

import logo from "./logo.png";
import styled from "styled-components";
import usePost from "../../usePost";

interface ILogin {
  email: string;
  senha: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--cinza);
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Link = styled.a`
  color: var(--azul-escuro);
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const LinkSignUp = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
`;

const Logo = styled.div`
  padding: 1.5rem 0 60px 0;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 70%;

  button {
    margin-top: 1.5rem;
    margin-bottom: -0.5rem;
  }

  span {
    color: var(--cinza);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { signUpData, error, success } = usePost();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: ILogin = {
      email: email,
      senha: senha,
    };

    try {
      await signUpData({
        endpoint: "auth/login",
        data: user,
      });
    } catch (error) {
      error && alert("Não foi possível efetuar o login");
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo da Voll" />
      </Logo>

      <FormWrapper>
        <h2>Faça login em sua conta</h2>
        <Form onSubmit={handleLogin}>
          <InputField
            label="Email"
            type="email"
            value={email}
            placeholder="Insira seu endereço de email"
            onChange={setEmail}
          />
          <InputField
            label="Senha"
            type="password"
            value={senha}
            placeholder="Insira sua senha"
            onChange={setSenha}
          />

          <Botao width="248px" type="submit">
            Entrar
          </Botao>
        </Form>
        <Link href="/">Esqueceu sua senha?</Link>

        <span>
          Ainda não tem conta?{" "}
          <LinkSignUp href="/sign-up">Faça seu cadastro!</LinkSignUp>
        </span>
      </FormWrapper>
    </Container>
  );
}
