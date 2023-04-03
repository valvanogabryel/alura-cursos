import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"
import { useObterToken } from "../../hooks"

const BarraNavegacao = () => {
  const [modalLoginAberta, setModalLoginAberta] = useState(false);
  const [modalCadastroAberta, setModalCadastroAberta] = useState(false);

  const token = useObterToken();

  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);

  console.log(usuarioLogado);

  function aoEfetuarLogin() {
    setModalLoginAberta(false);
    setUsuarioLogado(true);
  }

  return (
    <nav className="ab-navbar">
      <h1 className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da AluraBooks" />
        </Link>
      </h1>
      <ul className="navegacao">
        <li>
          <a href="#!">Categorias</a>
          <ul className="submenu">
            <li>
              <Link to="/">
                Frontend
              </Link>
            </li>
            <li>
              <Link to="/">
                Programação
              </Link>
            </li>
            <li>
              <Link to="/">
                Infraestrutura
              </Link>
            </li>
            <li>
              <Link to="/">
                Business
              </Link>
            </li>
            <li>
              <Link to="/">
                Design e UX
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        {
          usuarioLogado ?
            <li>
              <Link to='minha-conta/pedidos'>MINHA CONTA</Link>
            </li>
            :
            <>
              <li>
                <BotaoNavegacao
                  texto="Login"
                  textoAltSrc="Icone representando um usuário"
                  imagemSrc={usuario}
                  onClick={(() => setModalLoginAberta(true))}
                />
              </li>
              <li>
                <BotaoNavegacao
                  texto="Cadastrar-se"
                  textoAltSrc="Icone representando um usuário"
                  imagemSrc={usuario}
                  onClick={(() => setModalCadastroAberta(true))}
                />
                <ModalLoginUsuario
                  aberta={modalLoginAberta}
                  aoFechar={() => setModalLoginAberta(false)}
                  aoEfetuarLogin={() => aoEfetuarLogin()}
                />
                <ModalCadastroUsuario
                  aberta={modalCadastroAberta}
                  aoFechar={() => setModalCadastroAberta(false)}
                />
              </li>
            </>
        }
      </ul>
    </nav>
  );
}

export default BarraNavegacao