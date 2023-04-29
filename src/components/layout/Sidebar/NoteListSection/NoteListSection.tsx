import { useState } from 'react';

import { NotesList } from './NoteList/NoteList';
import { NoteListSectionHeader } from './NoteListSectionHeader';

type NoteListSectionProps = Readonly<{
	title: string;
	isPrivate?: boolean;
}>;

export const NoteListSection = ({
	title,
	isPrivate = false,
}: NoteListSectionProps) => {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<section>
			<NoteListSectionHeader
				title={title}
				isExpanded={isExpanded}
				toggleExpand={() => setIsExpanded(isExpanded => !isExpanded)}
			/>
			{isExpanded && <NotesList isPrivate={isPrivate} />}
		</section>
	);
};
