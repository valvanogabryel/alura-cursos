import { FormEvent, useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import DropBox from '../DropBox'
import './Form.css'
import CollaboratorInterface from '../../shared/interfaces/CollaboratorInterface'

interface FormularyProps {
    onCollaboratorRegister: (collaborator: CollaboratorInterface) => void
    teams: string[]
}

const Form = (props: FormularyProps) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onCollaboratorRegister({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="formulario">
            <form onSubmit={event => onSave(event)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    onChange={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChange={value => setImage(value)}
                />
                <DropBox
                    required={true}
                    label="Time"
                    items={props.teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form