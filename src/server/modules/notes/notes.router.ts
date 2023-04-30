import { createNoteHandler, getAllNotesHandler } from './notes.controller';
import { getAllNotesOutputSchema, noteSchema } from './notes.schemas';

import { protectedProcecure, router } from '@/server/trpc';

export const notesRouter = router({
	create: protectedProcecure
		.output(noteSchema)
		.mutation(({ ctx }) => createNoteHandler(ctx.session.user)),
	getAll: protectedProcecure
		.output(getAllNotesOutputSchema)
		.query(({ ctx }) => getAllNotesHandler(ctx.session.user)),
});
