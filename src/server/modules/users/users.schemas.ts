import { z } from 'zod';

import { PASSWORD_REGEX } from '@/lib/constants';

import type { TypeOf } from 'zod';

export const userSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	email: z.string().nullable(),
	emailVerified: z.date().nullable(),
	image: z.string().nullable(),
});

export const simpleUserSchema = userSchema.omit({
	email: true,
	emailVerified: true,
});

export const createUserSchema = z.object({
	fullName: z.string().nonempty('Full name is required'),
	email: z.string().email('Email must be a valid email'),
	password: z
		.string()
		.regex(PASSWORD_REGEX, 'Password must be at least 5 characters long'),
});

export const findUsersSchema = z.object({
	search: z.string().nonempty(),
});

export type User = TypeOf<typeof userSchema>;
export type SimpleUser = TypeOf<typeof simpleUserSchema>;
export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type FindUsersInput = TypeOf<typeof findUsersSchema>;
