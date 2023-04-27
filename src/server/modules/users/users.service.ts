import { hash } from '@/server/lib/hash';
import { prisma } from '@/server/lib/prisma/prisma.instance';

import type { CreateUserInput } from './users.schemas';
import type { Prisma } from '@prisma/client';

export const createUser = async ({
	fullName,
	email,
	password,
}: CreateUserInput) => {
	const hashedPassword = await hash(password);

	return prisma.user.create({
		data: {
			name: fullName,
			email,
			password: hashedPassword,
		},
	});
};

export const findUserBy = (where: Prisma.UserWhereInput) =>
	prisma.user.findFirst({
		where,
	});
