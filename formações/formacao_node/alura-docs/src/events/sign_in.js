import { findUser, registerUser } from '../utils/userDb.js';

export default function registerSingInEvents(socket, io) {
  socket.on('sing_in_user', async (userData) => {
    const userAlreadyExists = Boolean(await findUser(userData.name));

    if (userAlreadyExists)
      return socket.emit('sign_in_error', 'Usuário já cadastrado...');

    const results = await registerUser(userData);

    if (results.acknowledged) {
      socket.emit('sign_in_success');
    } else {
      socket.emit('sign_in_error', 'Ocorreu um erro no cadastro...');
    }
  });
}
