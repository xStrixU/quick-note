import { cache } from 'react';

import { appRouter } from '@/server/app.router';
import { createContext } from '@/server/context';

import 'server-only';

export const getAllNotes = cache(async () => {
	const caller = appRouter.createCaller(await createContext());
	const allNotes = await caller.notes.getAll();

	return allNotes;
});

export const getNoteById = cache(async (id: string) => {
	const caller = appRouter.createCaller(await createContext());
	const note = await caller.notes.getById({ id });

	return note;
});

export const getNotePreviewById = cache(async (id: string) => {
	const caller = appRouter.createCaller(await createContext());
	const note = await caller.notes.getPreviewById({ id });

	return note;
});
