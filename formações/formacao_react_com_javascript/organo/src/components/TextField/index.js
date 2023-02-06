import './TextField.css';

const TextField = (props) => {

    const changedPlaceholder = `${props.placeholder}...`

    const onDigit = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                value={props.value}
                onChange={onDigit}
                required={props.required}
                placeholder={changedPlaceholder} />
        </div>
    )
}

export default TextField;