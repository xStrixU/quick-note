import emailValidator from 'email-validator';

import { hash } from '@/server/lib/hash';
import { prisma } from '@/server/lib/prisma/prisma.instance';

import type { Prisma } from '@prisma/client';

export const createUser = async ({
	fullName,
	email,
	password,
}: {
	fullName: string;
	email: string;
	password: string;
}) => {
	const hashedPassword = await hash(password);

	return prisma.user.create({
		data: {
			name: fullName,
			email,
			password: hashedPassword,
		},
	});
};

export const findUsers = (search: string) => {
	if (emailValidator.validate(search)) {
		return findUsersByEmail(search);
	}

	return findUsersByFullName(search);
};

const findUsersByEmail = async (email: string) => {
	const users = await prisma.user.findMany({
		where: {
			email: {
				search: email,
			},
		},
	});

	return users;
};

const findUsersByFullName = async (fullName: string) => {
	const names = fullName.toLowerCase().split(' ').filter(Boolean);
	const users = await prisma.user.findMany({
		where: {
			name: {
				search: names.join(' | '),
			},
		},
	});

	return users.filter(user => {
		const userNames = user.name?.toLowerCase().split(' ');

		return names.every(name => userNames?.includes(name));
	});
};

export const findUserBy = (where: Prisma.UserWhereInput) =>
	prisma.user.findFirst({
		where,
	});
