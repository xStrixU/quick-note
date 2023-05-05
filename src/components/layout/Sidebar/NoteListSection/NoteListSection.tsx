import { useState } from 'react';

import { CreateNoteButton } from './CreateNoteButton';
import { NoteList } from './NoteList/NoteList';
import { NoteListSectionHeader } from './NoteListSectionHeader';

import type { Note } from '@/server/modules/notes/notes.schemas';

type NoteListSectionProps = Readonly<{
	title: string;
	emptyMessage: string;
	notes: Note[];
	isPrivate?: boolean;
}>;

export const NoteListSection = ({
	title,
	emptyMessage,
	notes,
	isPrivate,
}: NoteListSectionProps) => {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<section>
			<NoteListSectionHeader
				title={title}
				isExpanded={isExpanded}
				toggleExpand={() => setIsExpanded(isExpanded => !isExpanded)}
			/>
			{isExpanded && (
				<>
					{isPrivate && <CreateNoteButton />}
					{notes?.length ? (
						<NoteList notes={notes} />
					) : (
						<p className="ml-4 truncate text-sm">{emptyMessage}</p>
					)}
				</>
			)}
		</section>
	);
};
