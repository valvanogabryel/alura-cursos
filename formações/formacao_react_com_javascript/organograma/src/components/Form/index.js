import './Form.css';
import Field from '../Field';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
    const onSave = (event) => {
        event.preventDefault();
        props.onRegisterCollaborator({
            name,
            role,
            image,
            team
        })

        clearForm();
    }

    const clearForm = () => {
        setName('');
        setRole('');
        setImage('');
        setTeam('Programação');
    }

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('Programação');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    return (
        <section className="form__container">
            <form onSubmit={onSave} className="form">
                <h2 className="form__title">Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required
                    value={name}
                    changed={value => setName(value)}
                />
                <Field
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required
                    value={role}
                    changed={value => setRole(value)}
                />
                <Field
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    required
                    value={image}
                    changed={value => setImage(value)}
                />
                <Dropdown
                    label="Time"
                    items={props.teams}
                    value={team}
                    changed={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createTeam({ name: teamName, color: teamColor })
            }} className="form">
                <h2 className="form__title">Preencha os dados para criar um novo time.</h2>
                <Field
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    changed={value => setTeamName(value)}
                />
                <Field
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    changed={value => setTeamColor(value)}
                    type='color'
                />
                <Button>
                    Criar um novo time
                </Button>
            </form>
        </section>
    )
}

export default Form;