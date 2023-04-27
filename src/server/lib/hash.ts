import bcrypt from 'bcrypt';

import { serverEnv } from '@/env/server.env';

export const hash = (data: string) =>
	bcrypt.hash(data, serverEnv.PASSWORD_SALT_OR_ROUNDS);

export const compare = (plainData: string, hashedData: string) =>
	bcrypt.compare(plainData, hashedData);
