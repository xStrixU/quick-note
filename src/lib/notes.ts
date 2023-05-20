import { cache } from 'react';

import { minifyHTML } from './utils';

import { appRouter } from '@/server/app.router';
import { createContext } from '@/server/context';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

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

export const createNotePreviewIFrameSrcDoc = (note: NoteDetails) =>
	minifyHTML(`
		<!DOCTYPE html>
		<html>
			<head>
				<link rel="stylesheet" href="/tinymce/skins/content/default/content.min.css">
			</head>
			<body class="mce-content-body">
				${note.content}
			</body>
		</html>
	`);
