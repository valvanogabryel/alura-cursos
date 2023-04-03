import { useState } from "react";
import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";

import imagemPrincipal from './assets/login.png';

import './ModalLoginUsuario.css';
import login from "../../utils/login";
import { usePersistirToken } from "../../hooks";

interface ModalLoginUsuarioProps {
  aberta: boolean
  aoFechar: () => void
  aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({ aberta, aoEfetuarLogin, aoFechar }: ModalLoginUsuarioProps) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const setToken = usePersistirToken();

  const aoSubmeterFormulario = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuario = {
      email,
      senha
    };

    aoEfetuarLogin();
    login({
      usuario,
      setToken
    });
    limparFormulario();
  }

  function limparFormulario() {
    setEmail('');
    setSenha('');
    aoFechar();
  }

  return (
    <AbModal
      titulo="Login"
      aberta={aberta}
      aoFechar={aoFechar}
    >
      <section className="login__container">
        <figure>
          <img
            src={imagemPrincipal}
            alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
          />
        </figure>

        <form onSubmit={aoSubmeterFormulario}>
          <AbCampoTexto
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="seuemail@maneiro.com.br"
          />
          <AbCampoTexto
            label="Senha"
            type="password"
            value={senha}
            onChange={setSenha}
            placeholder="*********"
          />
          <div className="login__acoes">
            <span className="acoes__link">
              <a href="#!">Esqueci minha senha</a>
            </span>
            <AbBotao texto="Fazer login" />
          </div>
        </form>
      </section>
      <span className="linha"></span>
      <section className="login__footer">
        <div>
          <h3>Ainda não tem uma conta?</h3>
          <AbBotao texto="Criar conta" />
        </div>
      </section>
    </AbModal>
  );
}

export default ModalLoginUsuario;


