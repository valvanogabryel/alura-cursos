import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = () => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX & Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const onSave = (event) => {
        event.preventDefault();
        console.log('Form foi enviado')
    }

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');

    return (
        <section className="form__container">
            <form onSubmit={onSave} className="form">
                <h2 className="form__title">Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    value={name}
                    changed={value => setName(value)}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required={true} />
                <TextField
                    value={role}
                    changed={value => setRole(value)}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required={true} />
                <TextField
                    value={image}
                    changed={value => setImage(value)}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    required={true} />
                <Dropdown label="Time" items={teams} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;