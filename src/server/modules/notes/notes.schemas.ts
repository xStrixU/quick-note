import { z } from 'zod';

import type { TypeOf } from 'zod';

export const noteSchema = z.object({
	id: z.string(),
	title: z.string().nullable(),
});

export const getAllNotesOutputSchema = z.object({
	privateNotes: z.array(noteSchema),
	externalNotes: z.array(noteSchema),
});

export type Note = TypeOf<typeof noteSchema>;
