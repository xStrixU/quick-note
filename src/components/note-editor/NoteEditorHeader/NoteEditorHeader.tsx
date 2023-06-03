import { GoBack } from './GoBack';
import { ShareNoteButton } from './ShareNoteButton/ShareNoteButton';

import { DEFAULT_NOTE_TITLE } from '@/lib/constants';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteEditorHeaderProps = Readonly<{
	note: NoteDetails;
	isOwner: boolean;
}>;

export const NoteEditorHeader = ({ note, isOwner }: NoteEditorHeaderProps) => (
	<header className="flex h-10 w-full items-center border-b border-neutral-300 px-2.5 dark:border-neutral-700">
		<GoBack />
		<p className="ml-1.5 mr-auto truncate text-neutral-800 dark:text-neutral-300 desktop:ml-0">
			{note.title ?? DEFAULT_NOTE_TITLE}
		</p>
		{isOwner && <ShareNoteButton note={note} />}
	</header>
);
