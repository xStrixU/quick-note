import type { z } from 'zod';

export const validateEnvVariables = <TShape extends z.ZodRawShape>(
	processEnv: Record<string, string | undefined>,
	schema: z.ZodObject<TShape>
) => {
	const parsed = schema.safeParse(processEnv);

	if (!parsed.success) {
		console.error(
			'❌ Invalid environment variables:',
			parsed.error.flatten().fieldErrors
		);

		throw new Error('Invalid environment variables');
	}

	return parsed;
};
