import { defineCookies } from '../utils/cookies.js';

const socket = io();

function emitAuth(userData) {
  socket.emit('login_user', userData);
}

socket.on('login_success', (jwtToken) => {
  defineCookies('access_token', jwtToken.access_token);

  alert('Usuário logado com sucesso!');
  window.location.href = '/';
});

socket.on('login_error', (message) => {
  alert(message);
});

export { emitAuth };
