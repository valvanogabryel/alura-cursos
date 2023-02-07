import './Collaborator.css'

interface CollaboratorProps {
    name: string
    role: string
    image: string
    background: string
}

const Collaborator = ({ name, role, image, background }: CollaboratorProps) => {

    return (<div className='colaborador'>
        <div
            className='cabecalho'
            style={{ backgroundColor: background }}>
            <img src={image} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    </div>)
}

export default Collaborator;