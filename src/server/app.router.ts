import { notesRouter } from './modules/notes/notes.router';
import { usersRouter } from './modules/users/users.router';
import { router } from './trpc';

export const appRouter = router({
	users: usersRouter,
	notes: notesRouter,
});

export type AppRouter = typeof appRouter;
