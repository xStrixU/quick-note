import { TRPCError } from '@trpc/server';

import {
	createNote,
	deleteNoteById,
	getAllNotes,
	getNoteById,
	getNoteMembersById,
	inviteToNoteById,
	updateNoteById,
} from './notes.service';
import { isNoteOwner, isNoteOwnerOrMember } from './notes.utils';

import type { User } from '../users/users.schemas';
import type {
	InviteToNoteByIdInput,
	NoteByIdInput,
	UpdateNoteByIdInput,
} from './notes.schemas';

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

	if (!note || !isNoteOwnerOrMember(user, note)) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return { note, isOwner: isNoteOwner(user, note) };
};

export const getNotePreviewByIdHandler = async ({
	input: { id },
	user,
}: {
	input: NoteByIdInput;
	user?: User;
}) => {
	const note = await getNoteById(id);

	if (
		!note ||
		(!user && !note.isShared) ||
		(user && !isNoteOwnerOrMember(user, note))
	) {
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

export const getMembersByIdHandler = async ({
	input: { id },
	user,
}: {
	input: NoteByIdInput;
	user: User;
}) => {
	const members = await getNoteMembersById({ id, user });

	if (!members) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return members.map(({ user }) => user);
};

export const inviteToNoteByIdHandler = async ({
	input: { id, userIds },
	user,
}: {
	input: InviteToNoteByIdInput;
	user: User;
}) => {
	const members = await inviteToNoteById({ id, user, userIds });

	if (!members) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return members.map(({ user }) => user);
};
