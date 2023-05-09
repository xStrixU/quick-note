import {
	createNoteHandler,
	deleteNoteByIdHandler,
	getAllNotesHandler,
	getNoteByIdHandler,
	getNotePreviewByIdHandler,
	updateNoteByIdHandler,
} from './notes.controller';
import {
	getAllNotesOutputSchema,
	noteByIdSchema,
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
		.input(noteByIdSchema)
		.output(noteDetailsSchema)
		.query(({ input, ctx }) =>
			getNoteByIdHandler({ input, user: ctx.session.user })
		),
	getPreviewById: publicProcedure
		.input(noteByIdSchema)
		.output(noteDetailsSchema)
		.query(({ input }) => getNotePreviewByIdHandler(input)),
	updateById: protectedProcecure
		.input(updateNoteByIdSchema)
		.output(noteDetailsSchema)
		.mutation(({ input, ctx }) =>
			updateNoteByIdHandler({ input, user: ctx.session.user })
		),
	deleteById: protectedProcecure
		.input(noteByIdSchema)
		.output(noteDetailsSchema)
		.mutation(({ input, ctx }) =>
			deleteNoteByIdHandler({ input, user: ctx.session.user })
		),
});
