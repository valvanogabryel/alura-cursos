import styled from "styled-components";

interface Props {
  label?: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  color: var(--azul-escuro);
`;

const Field = styled.input`
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 16px;

  &:focus {
    outline: none;
  }
`;

export function InputField({
  label,
  type,
  value,
  placeholder,
  onChange,
  required,
}: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        required={required}
      />
    </Container>
  );
}
