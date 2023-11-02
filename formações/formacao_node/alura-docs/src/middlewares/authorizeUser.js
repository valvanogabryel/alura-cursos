import jwt from 'jsonwebtoken';

export default function authorizeUserMiddleWare(socket, next) {
  const access_token = socket.handshake.auth.token;

  try {
    jwt.verify(access_token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    next(err);
  }
}
