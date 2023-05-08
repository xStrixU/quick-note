import {
	createNoteHandler,
	getAllNotesHandler,
	getNoteByIdHandler,
	getNotePreviewByIdHandler,
	updateNoteByIdHandler,
} from './notes.controller';
import {
	getAllNotesOutputSchema,
	getNoteByIdSchema,
	noteDetailsSchema,
	noteSchema,
	updateNoteByIdSchema,
} from './notes.schemas';

import { protectedProcecure, publicProcedure, router } from '@/server/trpc';

export const notesRouter = router({
	create: protectedProcecure
		.output(noteSchema)
		.mutation(({ ctx }) => createNoteHandler(ctx.session.user)),
	getAll: protectedProcecure
		.output(getAllNotesOutputSchema)
		.query(({ ctx }) => getAllNotesHandler(ctx.session.user)),
	getById: protectedProcecure
		.input(getNoteByIdSchema)
		.output(noteDetailsSchema)
		.query(({ input, ctx }) =>
			getNoteByIdHandler({ input, user: ctx.session.user })
		),
	getPreviewById: publicProcedure
		.input(getNoteByIdSchema)
		.output(noteDetailsSchema)
		.query(({ input }) => getNotePreviewByIdHandler(input)),
	updateById: protectedProcecure
		.input(updateNoteByIdSchema)
		.output(noteDetailsSchema)
		.mutation(({ input, ctx }) =>
			updateNoteByIdHandler({ input, user: ctx.session.user })
		),
});
