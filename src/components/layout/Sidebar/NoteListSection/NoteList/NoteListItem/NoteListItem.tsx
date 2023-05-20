import { useSession } from 'next-auth/react';

import { ChangeNoteIconActionButton } from './ActionButton/ChangeNoteIconActionButton';
import { DeleteNoteActionButton } from './ActionButton/DeleteNoteActionButton';

import { ActiveLink } from '@/components/shared/ActiveLink';

import { DEFAULT_NOTE_TITLE } from '@/lib/constants';

import type { Note } from '@/server/modules/notes/notes.schemas';

type NoteListItemProps = Readonly<{
	note: Note;
}>;

export const NoteListItem = ({ note }: NoteListItemProps) => {
	const { data: session } = useSession();

	const isOwner = session?.user.id === note.userId;

	return (
		<li>
			<ActiveLink
				href={`/${note.id}`}
				className="group flex rounded p-1 pl-3"
				notActiveClassName="hover:bg-gray-200 hover:dark:bg-neutral-700"
				activeClassName="font-bold bg-gray-300 dark:bg-neutral-600"
			>
				<ChangeNoteIconActionButton icon={null} />
				<p className="ml-1.5 truncate">{note.title ?? DEFAULT_NOTE_TITLE}</p>
				<div className="ml-auto hidden group-hover:block">
					{isOwner && <DeleteNoteActionButton note={note} />}
				</div>
			</ActiveLink>
		</li>
	);
};
