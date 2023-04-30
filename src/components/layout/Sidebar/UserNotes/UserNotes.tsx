import { NoteListSection } from './NoteListSection/NoteListSection';

import { useGetAllNotes } from '@/hooks/notes/useGetAllNotes';

export const UserNotes = () => {
	const { data: allNotes } = useGetAllNotes();

	return (
		<div className="mb-4">
			<NoteListSection
				title="Private notes"
				emptyMessage="You don't have any private notes yet"
				notes={allNotes?.privateNotes}
				isPrivate
			/>
			<NoteListSection
				title="External notes"
				emptyMessage="You don't have any external notes yet"
				notes={allNotes?.externalNotes}
			/>
		</div>
	);
};
