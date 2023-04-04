import http from "../http";

interface IUser {
  usuario: {
    email: string;
    senha: string;
  };
  setToken: (token: string) => void;
}

export default function login({ usuario, setToken }: IUser) {
  http.post('public/login', usuario)
    .then(response => {
      setToken(response.data.access_token);
      alert(`Bem vindo de volta, ${response.data.user.nome}!`);
    })
    .catch(error => {
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        alert(errorMessage);
      } else {
        alert('Ocorreu um erro inesperado ao efetuar o login. Contate o suporte para relatar o ocorrido.');
      }
    });
}