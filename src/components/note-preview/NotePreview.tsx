import { NotePreviewContent } from './NotePreviewContent';

import { DEFAULT_NOTE_TITLE } from '@/lib/constants';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NotePreviewProps = Readonly<{
	note: NoteDetails;
}>;

export const NotePreview = ({ note }: NotePreviewProps) => (
	<div className="flex h-full flex-col">
		<h1 className="mb-2 text-2xl font-bold text-neutral-800 dark:text-neutral-300">
			{note.title ?? DEFAULT_NOTE_TITLE}
		</h1>
		<NotePreviewContent note={note} />
	</div>
);
