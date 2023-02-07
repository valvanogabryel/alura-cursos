import './DropBox.css'

interface DropBoxProps {
    label: string
    value: string
    items: Array<string>
    required: boolean
    onChange: (value: string) => void
}

const DropBox = (props: DropBoxProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                onChange={event =>
                    props.onChange(event.target.value)}
                required={props.required}
                value={props.value}
            >
                <option value=""></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropBox;