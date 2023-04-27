import { z } from 'zod';

import { PASSWORD_REGEX } from '@/lib/constants';

export const signUpFormSchema = z
	.object({
		fullName: z.string().nonempty('Full name is required'),
		email: z.string().nonempty('Email is required').email('Invalid email'),
		password: z
			.string()
			.nonempty('Password is required')
			.regex(PASSWORD_REGEX, 'Password must be at least 5 characters long'),
		confirmPassword: z.string().nonempty('Confirm password is required'),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});
