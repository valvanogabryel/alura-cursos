import './Button.css';

const Button = (props) => {
    return (
        <button className="form__button">
            {props.children}
        </button>
    )
}

export default Button;