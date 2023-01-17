import './TextField.css';

const TextField = (props) => (
    <div className="input__container">
        <label htmlFor={props.label} className="text__field--title">{props.label}</label>
        <input type="text" name={props.label.toLowerCase()} className="text__field--field" placeholder={props.placeholder} />
    </div>
)

export default TextField;