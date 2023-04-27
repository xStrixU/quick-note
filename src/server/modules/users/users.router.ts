import { createUserHandler } from './users.controller';
import { createUserSchema, userSchema } from './users.schemas';

import { publicProcedure, router } from '@/server/trpc';

export const usersRouter = router({
	create: publicProcedure
		.input(createUserSchema)
		.output(userSchema)
		.mutation(({ input }) => createUserHandler(input)),
});
