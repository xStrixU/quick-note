import { NoteMemberPermission } from '@prisma/client';
import { z } from 'zod';

import { simpleUserSchema } from '../users/users.schemas';

import type { TypeOf } from 'zod';

export const noteSchema = z.object({
	id: z.string(),
	userId: z.string(),
	title: z.string().nullable(),
});

export const noteDetailsSchema = noteSchema.extend({
	content: z.string(),
	isShared: z.boolean(),
});

export const noteMemberSchema = z.object({
	member: simpleUserSchema,
	permission: z.nativeEnum(NoteMemberPermission),
});

export const noteMembersSchema = z.array(noteMemberSchema);

export const getAllNotesOutputSchema = z.object({
	privateNotes: z.array(noteSchema),
	externalNotes: z.array(noteSchema),
});

export const noteByIdSchema = z.object({
	id: z.string(),
});

export const getNoteByIdOutputSchema = z.object({
	note: noteDetailsSchema,
	member: noteMemberSchema.optional(),
});

export const updateNoteByIdSchema = noteByIdSchema.extend({
	data: z.object({
		title: z.string().nullable().optional(),
		content: z.string().optional(),
		isShared: z.boolean().optional(),
	}),
});

export const inviteToNoteByIdSchema = noteByIdSchema.extend({
	userIds: z.array(z.string()),
});

export const deleteNoteMemberSchema = noteByIdSchema.extend({
	memberId: z.string(),
});

export const updateNoteMemberSchema = noteByIdSchema.extend({
	memberId: z.string(),
	data: z.object({
		permission: z.nativeEnum(NoteMemberPermission).optional(),
	}),
});

export type Note = TypeOf<typeof noteSchema>;
export type NoteMember = TypeOf<typeof noteMemberSchema>;
export type NoteDetails = TypeOf<typeof noteDetailsSchema>;
export type NoteByIdInput = TypeOf<typeof noteByIdSchema>;
export type UpdateNoteByIdInput = TypeOf<typeof updateNoteByIdSchema>;
export type InviteToNoteByIdInput = TypeOf<typeof inviteToNoteByIdSchema>;
export type DeleteNoteMemberInput = TypeOf<typeof deleteNoteMemberSchema>;
export type UpdateNoteMemberInput = TypeOf<typeof updateNoteMemberSchema>;
