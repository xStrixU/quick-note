import { NotePreviewContent } from './NotePreviewContent';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NotePreviewProps = Readonly<{
	note: NoteDetails;
}>;

export const NotePreview = ({ note }: NotePreviewProps) => (
	<div className="flex h-full flex-col">
		<h1 className="mb-2 text-2xl font-bold">{note.title}</h1>
		<NotePreviewContent note={note} />
	</div>
);
