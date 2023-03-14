import { useRef, useState } from "react";
import { useAddParticipant } from "../state/hooks/useAddParticipant";
import { useErrorMessage } from "../state/hooks/useErrorMessage";

const Form = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addOnList = useAddParticipant();
  const errorMessage = useErrorMessage();

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
        type="submit"
        disabled={name.length < 3}
      >
        Adicionar
      </button>
      {errorMessage && <p role='alert'>{errorMessage}</p>}
    </form>
  );
}

export default Form;