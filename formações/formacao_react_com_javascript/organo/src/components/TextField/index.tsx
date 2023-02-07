import React from 'react';
import './TextField.css';

interface TextFieldProps {
    placeholder: string
    label: string
    value: string
    required?: boolean
    onChange: (value: string) => void
}

const TextField = ({
    placeholder,
    label,
    onChange,
    value,
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
                value={value}
                onChange={onDigit}
                required={required}
                placeholder={changedPlaceholder}
            />
        </div>
    )
}

export default TextField;