import React, { Attributes } from "react";
import User from "../../interfaces/IUser";
import Input from "../Input";

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
    <div className="w-2/5 mx-auto my-10 static duration-200 bg-white p-4 shadow-lg dark:bg-dark-200 h-1/3">
      <form
        onSubmit={(event) => safeSubmit(event)}
        className="flex flex-col justify-center p-4"
      >
        <Input
          type='text'
          placeholder="Insira o seu nome"
          isRequired
          min={6}
        />
        <Input
          type='email'
          placeholder="Insira o seu email"
          isRequired
          min={10}
        />
        <button
          type="submit"
          className="form__button"
        >
          Seguir
        </button>
      </form>
    </div>
  );
}

export default Form;