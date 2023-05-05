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

export const getNoteById = async ({ id, user }: { id: string; user: User }) => {
	const note = await prisma.note.findFirst({
		where: {
			id,
			userId: user.id,
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
