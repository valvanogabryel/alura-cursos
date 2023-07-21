import { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const [values, setValues] = useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });

  const router = useRouter();

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }));
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          authService
            .login({
              username: values.usuario,
              password: values.senha,
            })
            .then(() => {
              // router.push("/auth-page-ssr");
              router.push("/auth-page-static");
            })
            .catch((error) => {
              error && alert(error);
            });
        }}
      >
        <input
          placeholder="Usuário"
          name="usuario"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          value={values.senha}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
