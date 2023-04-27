import { TRPCError } from '@trpc/server';

import { createUser } from './users.service';

import { PrismaErrorCode } from '@/server/lib/prisma/prisma.types';
import { isPrismaError } from '@/server/lib/prisma/prisma.utils';

import type { CreateUserInput } from './users.schemas';

export const createUserHandler = async (input: CreateUserInput) => {
	try {
		const user = await createUser(input);

		return user;
	} catch (err) {
		if (isPrismaError(err) && err.code === PrismaErrorCode.UniqueKeyViolation) {
			throw new TRPCError({
				code: 'CONFLICT',
				message: 'Email is already registered',
			});
		}

		throw err;
	}
};
