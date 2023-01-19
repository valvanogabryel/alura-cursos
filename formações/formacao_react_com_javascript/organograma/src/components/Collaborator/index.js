import './Collaborator.css';
//                     desestruturação da prop
const Collaborator = ({ name, role, image, primary_color }) => {

    return (
        <div className="card__container">
            <div className="card__picture" style={{ backgroundColor: primary_color }}>
                <img src={image} alt="Foto de perfil do colaborador" />
            </div>
            <div className="card__informations">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Collaborator;