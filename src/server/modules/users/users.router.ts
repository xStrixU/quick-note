import { z } from 'zod';

import { createUserHandler, findUsersHandler } from './users.controller';
import {
	createUserSchema,
	findUsersSchema,
	simpleUserSchema,
	userSchema,
} from './users.schemas';

import { protectedProcecure, publicProcedure, router } from '@/server/trpc';

export const usersRouter = router({
	create: publicProcedure
		.input(createUserSchema)
		.output(userSchema)
		.mutation(({ input }) => createUserHandler(input)),
	find: protectedProcecure
		.input(findUsersSchema)
		.output(z.array(simpleUserSchema))
		.query(({ input, ctx }) =>
			findUsersHandler({ input, user: ctx.session.user })
		),
});
