import { TRPCError } from '@trpc/server';

import {
	createNote,
	deleteNoteById,
	getAllNotes,
	getNoteById,
	updateNoteById,
} from './notes.service';

import type { User } from '../users/users.schemas';
import type { NoteByIdInput, UpdateNoteByIdInput } from './notes.schemas';

export const createNoteHandler = async (user: User) => {
	const note = await createNote(user);

	return note;
};

export const getAllNotesHandler = async (user: User) => {
	const notes = await getAllNotes(user);

	return notes;
};

export const getNoteByIdHandler = async ({
	input: { id },
	user,
}: {
	input: NoteByIdInput;
	user: User;
}) => {
	const note = await getNoteById(id);

	if (!note || note.userId !== user.id) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return note;
};

export const getNotePreviewByIdHandler = async ({ id }: NoteByIdInput) => {
	const note = await getNoteById(id);

	if (!note?.isShared) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return note;
};

export const updateNoteByIdHandler = async ({
	input: { id, data },
	user,
}: {
	input: UpdateNoteByIdInput;
	user: User;
}) => {
	const updatedNote = await updateNoteById({ id, data, user });

	if (!updatedNote) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return updatedNote;
};

export const deleteNoteByIdHandler = async ({
	input: { id },
	user,
}: {
	input: NoteByIdInput;
	user: User;
}) => {
	const deletedNote = await deleteNoteById({ id, user });

	if (!deletedNote) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return deletedNote;
};
