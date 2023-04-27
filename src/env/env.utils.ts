import type { TypeOf, z } from 'zod';

export const validateEnvVariables = <TShape extends z.ZodRawShape>(
	processEnv: Record<string, string | undefined>,
	schema: z.ZodObject<TShape>
) => {
	const skip =
		Boolean(process.env.SKIP_ENV_VALIDATION) &&
		process.env.SKIP_ENV_VALIDATION !== 'false' &&
		process.env.SKIP_ENV_VALIDATION !== '0';

	if (skip) {
		return processEnv as TypeOf<typeof schema>;
	}

	const parsed = schema.safeParse(processEnv);

	if (!parsed.success) {
		console.error(
			'❌ Invalid environment variables:',
			parsed.error.flatten().fieldErrors
		);

		throw new Error('Invalid environment variables');
	}

	return parsed.data;
};
