import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.collaborators.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaboradores'>
                {
                    props.collaborators.map(collaborator =>
                        <Collaborator
                            background={props.secondaryColor}
                            key={collaborator.name}
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                        />)
                }
            </div>
        </section>
            : ''
    )
}

export default Team;