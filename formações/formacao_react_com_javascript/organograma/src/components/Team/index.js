
import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const sectionBackground = { backgroundColor: props.primary_color }

    return (
        // RENDERIZAÇÃO CONDICIONAL EM REACT
        //  (props.collaborators.length > 0) && 
        //              OU

        (props.collaborators.length > 0) ?
            <section className='team__container' style={{ sectionBackground }}>
                <input type="color" value={props.primary_color} onChange={event => { props.changeColor(event.currentTarget.value, props.name) }} className="color__input" />
                <h3 className='team__title' style={{ borderColor: props.primary_color }}>{props.name}</h3>
                <span className='line' style={{ backgroundColor: props.primary_color, color: props.primary_color }}>-</span>
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