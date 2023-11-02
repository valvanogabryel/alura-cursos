import { emitAuth } from './socket_front_login.js';

const form = document.querySelector('#form-login');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form['input-usuario'].value;
  const password = form['input-senha'].value;

  emitAuth({ name, password });
});
