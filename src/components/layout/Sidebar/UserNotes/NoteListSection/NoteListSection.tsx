import { useState } from 'react';

import { CreateNoteButton } from './CreateNoteButton';
import { NoteList } from './NoteList/NoteList';
import { NoteListAlert } from './NoteListAlert';
import { NoteListSectionHeader } from './NoteListSectionHeader';

import type { Note } from '@/server/modules/notes/notes.schemas';

type NoteListSectionProps = Readonly<{
	title: string;
	emptyMessage: string;
	notes: Note[] | undefined;
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
						<NoteListAlert message={notes ? emptyMessage : 'Loading...'} />
					)}
				</>
			)}
		</section>
	);
};
