import './Team.css';

const Team = (props) => {
    const sectionBackground = { backgroundColor: props.secondary_color }

    return (
        <section className='team__container' style={sectionBackground}>
            <h3 className='team__title' style={{ borderColor: props.primary_color }}>{props.name}</h3>
        </section>
    )
}

export default Team;