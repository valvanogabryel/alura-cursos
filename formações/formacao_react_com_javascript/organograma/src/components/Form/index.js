import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
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
        props.onRegisterCollaborator({
            name,
            role,
            image,
            team
        })
    }

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    return (
        <section className="form__container">
            <form onSubmit={onSave} className="form">
                <h2 className="form__title">Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required={true}
                    value={name}
                    changed={value => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required={true}
                    value={role}
                    changed={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    required={true}
                    value={image}
                    changed={value => setImage(value)}
                />
                <Dropdown
                    label="Time"
                    items={teams}
                    value={team}
                    changed={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;