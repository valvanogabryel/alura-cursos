import jwt from 'jsonwebtoken';

export default function generateJWT(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { access_token: token };
}
