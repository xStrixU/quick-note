import { z } from 'zod';

import { validateEnvVariables } from './env.utils';

export const clientEnvSchema = z.object({});

export const clientProcessEnv = {};

export const clientEnv = validateEnvVariables(
	clientProcessEnv,
	clientEnvSchema
);
