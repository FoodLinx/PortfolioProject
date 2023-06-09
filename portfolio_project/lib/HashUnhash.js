import { compare, genSalt, hash } from 'bcrypt';

export async function hashPassword(password) {
  const saltRounds = process.env.SALTROUNDS || 10
  const salt = await genSalt(saltRounds);
  const hashed = await hash(password, salt)
  return hashed
}

export async function verifyPassword(password, hashed) {
  if (!password || !hashed) return false
  console.log(password, hashed);
  const isCorrect = await compare(password, hashed)
  return isCorrect
}