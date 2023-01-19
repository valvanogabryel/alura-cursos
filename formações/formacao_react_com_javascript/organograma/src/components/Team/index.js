
import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const sectionBackground = { backgroundColor: props.secondary_color }

    return (
        <section className='team__container' style={sectionBackground}>
            <h3 className='team__title' style={{ borderColor: props.primary_color }}>{props.name}</h3>
            <div className="team__collaborators">
                {props.collaborators.map((collaborator, index) => {
                    return <Collaborator
                        name={collaborator.name}
                        role={collaborator.role}
                        image={collaborator.image}
                        key={index}
                    />
                })}
            </div>
        </section>
    )
}

export default Team;