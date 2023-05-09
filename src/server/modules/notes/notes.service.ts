import { prisma } from '@/server/lib/prisma/prisma.instance';

import type { User } from '../users/users.schemas';
import type { Note } from '@prisma/client';

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
	const externalNotes: Note[] = [];

	return { privateNotes, externalNotes };
};

export const getNoteById = async (id: string) => {
	const note = await prisma.note.findFirst({
		where: { id },
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
	const note = await prisma.note.findFirst({
		where: { id, userId: user.id },
	});

	if (!note) {
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

	if (!note || note.userId !== user.id) {
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
