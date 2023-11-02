import { emitSignIn } from './socket_front_sign_in.js';

const form = document.querySelector('#form-cadastro');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form['input-usuario'].value;
  const password = form['input-senha'].value;

  emitSignIn({ name, password });
});
