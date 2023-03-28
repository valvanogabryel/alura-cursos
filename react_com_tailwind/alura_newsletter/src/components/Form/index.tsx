import React, { Attributes } from "react";
import User from "../../interfaces/IUser";

interface FormProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const Form: React.FC<FormProps> = ({ setUser }) => {
  function safeSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const name = (event.currentTarget[0] as HTMLInputElement).value;
    const email = (event.currentTarget[1] as HTMLInputElement).value;

    setUser({
      name,
      email
    });
  };

  return (
    <form onSubmit={(event) => safeSubmit(event)}>
      <input type="text" placeholder="Insira o seu nome" />
      <input type="email" placeholder="Insira o seu melhor email" />
      <button type="submit">Seguir</button>
    </form>
  );
}

export default Form;