import { GoBack } from './GoBack';
import { ShareNoteButton } from './ShareNoteButton/ShareNoteButton';

import { DEFAULT_NOTE_TITLE } from '@/lib/constants';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteEditorHeaderProps = Readonly<{
	note: NoteDetails;
}>;

export const NoteEditorHeader = ({ note }: NoteEditorHeaderProps) => (
	<header className="flex w-full items-center border-b border-neutral-300 px-2.5 py-1.5 dark:border-neutral-700">
		<GoBack />
		<p className="ml-1.5 mr-auto truncate desktop:ml-0">
			{note.title ?? DEFAULT_NOTE_TITLE}
		</p>
		<ShareNoteButton note={note} />
	</header>
);
