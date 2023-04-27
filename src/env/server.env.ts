import { z } from 'zod';

import { clientEnvSchema, clientProcessEnv } from './client.env';
import { validateEnvVariables } from './env.utils';

import 'server-only';

const serverEnvSchema = z
	.object({
		NODE_ENV: z.enum(['development', 'production', 'test']),
		DATABASE_URL: z.string().url(),
		NEXTAUTH_URL: z.preprocess(
			value => process.env.VERCEL_URL ?? value,
			process.env.VERCEL ? z.string().nonempty() : z.string().url()
		),
		NEXTAUTH_SECRET: z.string(),
		PASSWORD_SALT_OR_ROUNDS: z.union([
			z.string().regex(/^\d+$/).transform(Number),
			z.string(),
		]),
		APPLE_CLIENT_ID: z.string(),
		APPLE_CLIENT_SECRET: z.string(),
		FACEBOOK_CLIENT_ID: z.string(),
		FACEBOOK_CLIENT_SECRET: z.string(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
	})
	.merge(clientEnvSchema);

const serverProcessEnv = {
	NODE_ENV: process.env.NODE_ENV,
	DATABASE_URL: process.env.DATABASE_URL,
	NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	PASSWORD_SALT_OR_ROUNDS: process.env.PASSWORD_SALT_OR_ROUNDS,
	APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID,
	APPLE_CLIENT_SECRET: process.env.APPLE_CLIENT_SECRET,
	FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	...clientProcessEnv,
};

export const serverEnv = validateEnvVariables(
	serverProcessEnv,
	serverEnvSchema
);
