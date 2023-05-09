import { z } from 'zod';

import type { TypeOf } from 'zod';

export const noteSchema = z.object({
	id: z.string(),
	title: z.string().nullable(),
});

export const noteDetailsSchema = noteSchema.extend({
	content: z.string(),
	isShared: z.boolean(),
});

export const getAllNotesOutputSchema = z.object({
	privateNotes: z.array(noteSchema),
	externalNotes: z.array(noteSchema),
});

export const noteByIdSchema = z.object({
	id: z.string(),
});

export const updateNoteByIdSchema = noteByIdSchema.extend({
	data: z.object({
		title: z.string().nullable().optional(),
		content: z.string().optional(),
		isShared: z.boolean().optional(),
	}),
});

export type Note = TypeOf<typeof noteSchema>;
export type NoteDetails = TypeOf<typeof noteDetailsSchema>;
export type NoteByIdInput = TypeOf<typeof noteByIdSchema>;
export type UpdateNoteByIdInput = TypeOf<typeof updateNoteByIdSchema>;
