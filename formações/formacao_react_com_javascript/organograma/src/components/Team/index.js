import './Team.css';

const Team = (props) => {
    return (
        <section className='team__container'>
            <h3 className='team__title'>{props.name}</h3>
        </section>
    )
}

export default Team;