import generateJWT from '../utils/generateJWT.js';
import { authUser, findUser } from '../utils/userDb.js';

export default function registerLoginEvents(socket, io) {
  socket.on('login_user', async ({ name, password }) => {
    const userFound = await findUser(name);

    if (!userFound) {
      return socket.emit(
        'login_error',
        'Nome de usuário incorreto ou inexistente...'
      );
    }

    const authenticated = await authUser(password, userFound.password);

    if (!authenticated) return socket.emit('login_error', 'Senha incorreta...');

    const jwtToken = generateJWT({ name });
    return socket.emit('login_success', jwtToken);
  });
}
