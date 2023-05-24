import { TRPCError } from '@trpc/server';

import { mapPrismaNoteMemberToNoteMember } from './notes.mapper';
import {
	createNote,
	deleteNoteById,
	deleteNoteMember,
	getAllNotes,
	getNoteById,
	getNoteMemberById,
	getNoteMembersById,
	inviteToNoteById,
	updateNoteById,
	updateNoteMember,
} from './notes.service';
import { isNoteMember, isNoteOwnerOrMember } from './notes.utils';

import type { User } from '../users/users.schemas';
import type {
	DeleteNoteMemberInput,
	InviteToNoteByIdInput,
	NoteByIdInput,
	UpdateNoteByIdInput,
	UpdateNoteMemberInput,
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

	if (!isNoteMember(user, note)) {
		return { note };
	}

	const member = await getNoteMemberById({ id, user });

	return {
		note,
		...(member && { member: mapPrismaNoteMemberToNoteMember(member) }),
	};
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

	return members.map(mapPrismaNoteMemberToNoteMember);
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

	return members.map(mapPrismaNoteMemberToNoteMember);
};

export const deleteNoteMemberHandler = async ({
	input: { id, memberId },
	user,
}: {
	input: DeleteNoteMemberInput;
	user: User;
}) => {
	const deletedMember = await deleteNoteMember({ id, memberId, user });

	if (!deletedMember) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return mapPrismaNoteMemberToNoteMember(deletedMember);
};

export const updateNoteMemberHandler = async ({
	input: { id, memberId, data },
	user,
}: {
	input: UpdateNoteMemberInput;
	user: User;
}) => {
	const updatedNoteMember = await updateNoteMember({
		noteId: id,
		memberId,
		data,
		user,
	});

	if (!updatedNoteMember) {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return mapPrismaNoteMemberToNoteMember(updatedNoteMember);
};
