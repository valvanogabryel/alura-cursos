import { useRef, useState } from "react";
import { useAddParticipant } from "../state/hooks/useAddParticipant";

const Form = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addOnList = useAddParticipant();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addOnList(name);
    setName('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button
        disabled={!name}
      >
        Adicionar
      </button>
    </form>
  );
}

export default Form;