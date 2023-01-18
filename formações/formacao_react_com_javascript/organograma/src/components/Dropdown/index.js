import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className="dropdown__container">
            <label className="dropdown__label">{props.label}</label>
            <select className="dropdown__select" value={props.value} onInput={event => props.changed(event.target.value)}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;