import { z } from 'zod';

import { validateEnvVariables } from './env.utils';

export const clientEnvSchema = z.object({});

export const clientProcessEnv = {};

const { data } = validateEnvVariables(clientProcessEnv, clientEnvSchema);

export { data as clientEnv };
