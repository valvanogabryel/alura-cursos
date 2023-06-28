interface Props {
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function InputField({ type, value, placeholder, onChange }: Props) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      required
    />
  );
}
