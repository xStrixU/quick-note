import bcrypt from 'bcrypt';

import { env } from '@/env.mjs';

export const hash = (data: string) =>
	bcrypt.hash(data, env.PASSWORD_SALT_OR_ROUNDS);

export const compare = (plainData: string, hashedData: string) =>
	bcrypt.compare(plainData, hashedData);
