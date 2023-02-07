import './Collaborator.css'

interface CollaboratorProps {
    name: string
    role: string
    image: string
    date: string
    background: string
}

const Collaborator = ({ name, role, image, background, date }: CollaboratorProps) => {

    return (<div className='colaborador'>
        <div
            className='cabecalho'
            style={{ backgroundColor: background }}>
            <img src={image} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{role}</h5>
            <h6>{new Date(date).toLocaleDateString()}</h6>
        </div>
    </div>)
}

export default Collaborator;