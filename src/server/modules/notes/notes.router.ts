import {
	createNoteHandler,
	deleteNoteByIdHandler,
	getAllNotesHandler,
	getMembersByIdHandler,
	getNoteByIdHandler,
	getNotePreviewByIdHandler,
	inviteToNoteByIdHandler,
	updateNoteByIdHandler,
} from './notes.controller';
import {
	getAllNotesOutputSchema,
	getNoteByIdOutputSchema,
	inviteToNoteByIdSchema,
	noteByIdSchema,
	noteDetailsSchema,
	noteMembersSchema,
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
		.output(getNoteByIdOutputSchema)
		.query(({ input, ctx }) =>
			getNoteByIdHandler({ input, user: ctx.session.user })
		),
	getPreviewById: publicProcedure
		.input(noteByIdSchema)
		.output(noteDetailsSchema)
		.query(({ input, ctx }) =>
			getNotePreviewByIdHandler({ input, user: ctx.session?.user })
		),
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
	getMembersById: protectedProcecure
		.input(noteByIdSchema)
		.output(noteMembersSchema)
		.query(({ input, ctx }) =>
			getMembersByIdHandler({ input, user: ctx.session.user })
		),
	inviteById: protectedProcecure
		.input(inviteToNoteByIdSchema)
		.output(noteMembersSchema)
		.mutation(({ input, ctx }) =>
			inviteToNoteByIdHandler({ input, user: ctx.session.user })
		),
});
