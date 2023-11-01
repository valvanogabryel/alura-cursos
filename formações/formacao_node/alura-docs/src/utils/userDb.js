import { usersCollection } from '../database/connect.js';
import bcrypt from 'bcryptjs';

export function findUser(name) {
  const user = usersCollection.findOne({
    name,
  });

  return user;
}

export async function registerUser({ name, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const userCreated = usersCollection.insertOne({
    name,
    password: hashedPassword,
  });

  return userCreated;
}
