import jwt from 'jsonwebtoken';

export default function authorizeUserMiddleWare(socket, next) {
  const access_token = socket.handshake.auth.token;

  try {
    const payloadToken = jwt.verify(access_token, process.env.JWT_SECRET);

    socket.emit('authorization_success', payloadToken);

    next();
  } catch (err) {
    next(err);
  }
}
