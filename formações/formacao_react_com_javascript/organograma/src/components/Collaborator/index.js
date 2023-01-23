import './Collaborator.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

//                     desestruturação da prop
const Collaborator = ({ name, role, image, primary_color, onDelete, id, isFavorite, onFavorite }) => {
    const cardColor = primary_color;

    const favoriteProps = {
        size: 25,
        cursor: 'pointer',
        onClick: favorite
    }

    function favorite() { onFavorite(id) }



    return (
        <div className="card__container">
            <div className="delete" onClick={onDelete}>X</div>
            <div className="card__picture" style={{ backgroundColor: cardColor }}>
                <img src={image} alt="Foto de perfil do colaborador" />
            </div>
            <div className="card__informations">
                <h4>{name}</h4>
                <h5>{role}</h5>
                <div className="favorite">
                    {isFavorite ? <AiFillHeart {...favoriteProps} color='red' />
                        : <AiOutlineHeart {...favoriteProps} color={primary_color} />}
                </div>
            </div>
        </div>
    )
}

export default Collaborator;