import hexToRgba from 'hex-to-rgba';
import Collaborator from '../Collaborator';
import './Team.css';

const Team = ({ name, primary_color, collaborators, onDelete, changeColor, id }) => {
    const sectionBackground = { backgroundColor: hexToRgba(primary_color, '.3') }

    return (
        // RENDERIZAÇÃO CONDICIONAL EM REACT
        //  (props.collaborators.length > 0) && 
        //              OU

        (collaborators.length > 0) ?
            <section className='team__container' style={sectionBackground}>
                <input type="color" value={primary_color} onChange={event => { changeColor(event.currentTarget.value, id) }} className="color__input" />
                <h3 className='team__title' style={{ borderColor: primary_color }}>{name}</h3>
                <span className='line' style={{ backgroundColor: primary_color, color: primary_color }}>-</span>
                <div className="team__collaborators">
                    {collaborators.map((collaborator, index) => {
                        return <Collaborator
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                            primary_color={primary_color}
                            key={index}
                            onDelete={onDelete}
                        />
                    })}
                </div>
            </section>

            : ''
    )
}

export default Team;