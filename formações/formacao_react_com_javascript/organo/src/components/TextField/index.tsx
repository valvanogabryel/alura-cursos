import './TextField.css';

interface TextFieldProps {
    placeholder: string
    label: string
    value: string
    type?: 'text' | 'password' | 'email' | 'number' | 'date'
    required?: boolean
    onChange: (value: string) => void
}

const TextField = ({
    placeholder,
    label,
    onChange,
    value,
    type = 'text',
    required = false }: TextFieldProps) => {

    const changedPlaceholder = `${placeholder}...`

    const onDigit = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onDigit}
                required={required}
                placeholder={changedPlaceholder}
            />
        </div>
    )
}

export default TextField;