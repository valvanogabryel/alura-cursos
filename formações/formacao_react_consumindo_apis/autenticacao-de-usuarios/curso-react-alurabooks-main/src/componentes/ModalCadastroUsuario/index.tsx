import { useState } from "react"
import { AbBotao, AbCampoTexto, AbModal, } from "ds-alurabooks"

import imagemPrincipal from './assets/login.png'

import axios from "axios";

import './ModalCadastroUsuario.css'

const ModalCadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        };


        axios.post('http://localhost:8000/public/registrar', usuario)
            .then(() => {
                alert('Usuário foi cadastrado com sucesso!');
            })
            .catch((err) => {
                alert('Ops... Algo deu errado.')
                console.log(err);
            })

        limparFormulario();
    }

    const limparFormulario = () => {
        setNome('');
        setEmail('');
        setEndereco('');
        setComplemento('');
        setCep('');
        setSenha('');
        setSenhaConfirmada('');
    };

    return (
        <AbModal
            titulo="Cadastrar"
            aberta={true}
            aoFechar={() => AbCampoTexto}
        >
            <section className="corpoModalCadastro">
                <figure>
                    <img
                        src={imagemPrincipal}
                        alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
                    />
                </figure>
                <form onSubmit={aoSubmeterFormulario}>
                    <AbCampoTexto
                        label="Nome"
                        value={nome}
                        onChange={setNome}
                        placeholder='Seu nome completo'
                    />
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type="email"
                        placeholder='samuelmail@gmail.com'
                    />
                    <AbCampoTexto
                        label="Endereço"
                        value={endereco}
                        onChange={setEndereco}
                        placeholder='Sua rua e número'
                    />
                    <AbCampoTexto
                        label="Complemento"
                        value={complemento}
                        onChange={setComplemento}
                        placeholder='Apto/casa, bloco, referência'
                    />
                    <AbCampoTexto
                        label="CEP"
                        value={cep}
                        onChange={setCep}
                        placeholder='Apto/casa e bloco'
                    />
                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                        placeholder='***********'
                    />
                    <AbCampoTexto
                        label="Confirmação da senha"
                        value={senhaConfirmada}
                        onChange={setSenhaConfirmada}
                        type="password"
                        placeholder='***********'
                    />
                    <div className="acoes">
                        <AbBotao texto="Cadastrar" />
                    </div>
                </form>
            </section>
        </AbModal>
    );
}

export default ModalCadastroUsuario