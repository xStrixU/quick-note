import { isNoteOwner, isNoteOwnerOrMember } from './notes.utils';

import { prisma } from '@/server/lib/prisma/prisma.instance';

import type { User } from '../users/users.schemas';
import type { NoteMemberPermission } from '@prisma/client';

export const createNote = async (user: User) => {
	const note = await prisma.note.create({
		data: {
			userId: user.id,
		},
	});

	return note;
};

export const getAllNotes = async (user: User) => {
	const privateNotes = await prisma.note.findMany({
		where: {
			userId: user.id,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
	const externalNotes = (
		await prisma.noteMember.findMany({
			where: {
				userId: user.id,
			},
			include: {
				note: true,
			},
		})
	).map(({ note }) => note);

	return { privateNotes, externalNotes };
};

export const getNoteById = async (id: string) => {
	const note = await prisma.note.findFirst({
		where: { id },
		include: {
			members: true,
		},
	});

	return note;
};

export const updateNoteById = async ({
	id,
	data,
	user,
}: {
	id: string;
	data: Partial<{
		title: string | null;
		content: string;
		isShared: boolean;
	}>;
	user: User;
}) => {
	const note = await getNoteById(id);

	if (!note || !isNoteOwnerOrMember(user, note, 'EDIT')) {
		return null;
	}

	const updatedNote = await prisma.note.update({
		where: {
			id,
		},
		data,
	});

	return updatedNote;
};

export const deleteNoteById = async ({
	id,
	user,
}: {
	id: string;
	user: User;
}) => {
	const note = await getNoteById(id);

	if (!note || !isNoteOwner(user, note)) {
		return null;
	}

	await prisma.note.deleteMany({
		where: {
			id,
			userId: user.id,
		},
	});

	return note;
};

export const getNoteMemberById = async ({
	id,
	user,
}: {
	id: string;
	user: User;
}) => {
	const member = await prisma.noteMember.findFirst({
		where: {
			noteId: id,
			userId: user.id,
		},
		include: {
			user: true,
		},
	});

	return member;
};

export const getNoteMembersById = async ({
	id,
	user,
}: {
	id: string;
	user: User;
}) => {
	const note = await getNoteById(id);

	if (!note || !isNoteOwner(user, note)) {
		return null;
	}

	const members = await prisma.noteMember.findMany({
		where: {
			noteId: id,
		},
		include: {
			user: true,
		},
	});

	return members;
};

export const inviteToNoteById = async ({
	id,
	user,
	userIds,
}: {
	id: string;
	user: User;
	userIds: string[];
}) => {
	const note = await getNoteById(id);

	if (!note || !isNoteOwner(user, note)) {
		return null;
	}

	await prisma.noteMember.createMany({
		data: userIds.map(userId => ({ noteId: id, userId })),
	});

	return getNoteMembersById({ id, user });
};

export const deleteNoteMember = async ({
	id,
	memberId,
	user,
}: {
	id: string;
	memberId: string;
	user: User;
}) => {
	const note = await getNoteById(id);

	if (!note || !isNoteOwner(user, note)) {
		return null;
	}

	const deletedMember = await prisma.noteMember.delete({
		where: {
			userId_noteId: {
				userId: memberId,
				noteId: id,
			},
		},
		include: {
			user: true,
		},
	});

	return deletedMember;
};

export const updateNoteMember = async ({
	noteId,
	memberId,
	data,
	user,
}: {
	noteId: string;
	memberId: string;
	data: Partial<{ permission: NoteMemberPermission }>;
	user: User;
}) => {
	const note = await getNoteById(noteId);

	if (!note || !isNoteOwner(user, note)) {
		return null;
	}

	const updatedNoteMember = await prisma.noteMember.update({
		where: {
			userId_noteId: {
				userId: memberId,
				noteId,
			},
		},
		data,
		include: {
			user: true,
		},
	});

	return updatedNoteMember;
};
