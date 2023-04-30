import { createNote, getAllNotes } from './notes.service';

import type { User } from '../users/users.schemas';

export const createNoteHandler = async (user: User) => {
	const note = await createNote(user);

	return note;
};

export const getAllNotesHandler = async (user: User) => {
	const notes = await getAllNotes(user);

	return notes;
};
