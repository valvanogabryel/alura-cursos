import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const sectionBackground = { backgroundColor: props.secondary_color }

    return (
        // RENDERIZAÇÃO CONDICIONAL EM REACT
        //  (props.collaborators.length > 0) && 
        //              OU
        (props.collaborators.length > 0) ?
            <section className='team__container' style={sectionBackground}>
                <h3 className='team__title' style={{ borderColor: props.primary_color }}>{props.name}</h3>
                <div className="team__collaborators">
                    {props.collaborators.map((collaborator, index) => {
                        return <Collaborator
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                            primary_color={props.primary_color}
                            key={index}
                            onDelete={props.onDelete}
                        />
                    })}
                </div>
            </section>
            : ''
    )
}

export default Team;