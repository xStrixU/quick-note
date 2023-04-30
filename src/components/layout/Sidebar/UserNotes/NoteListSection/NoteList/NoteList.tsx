import { NoteListItem } from './NoteListItem/NoteListItem';

import type { Note } from '@/server/modules/notes/notes.schemas';

type NoteListProps = Readonly<{
	notes: Note[];
}>;

export const NoteList = ({ notes }: NoteListProps) => (
	<ul>
		{notes.map(note => (
			<NoteListItem key={note.id} title={note.title} icon={null} />
		))}
	</ul>
);
