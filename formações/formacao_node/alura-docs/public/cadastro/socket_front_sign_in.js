const socket = io();

function emitSignIn(userData) {
  socket.emit('sing_in_user', userData);
}

socket.on('sign_in_success', () => {
  alert('Usuário cadastrado com sucesso!');
  window.location.href = '/login';
});

socket.on('sign_in_error', (message) => {
  alert(message);
});

export { emitSignIn };
