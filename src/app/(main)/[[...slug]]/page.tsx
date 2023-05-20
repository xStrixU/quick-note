import { notFound } from 'next/navigation';

import { NoteEditor } from '@/components/note-editor/NoteEditor';

import { getNoteById } from '@/lib/notes';

import type { OptionalCatchAllParams } from '@/types/next';

type EditNotePageProps = Readonly<{
	params: OptionalCatchAllParams<'slug'>;
}>;

const EditNotePage = async ({ params: { slug } }: EditNotePageProps) => {
	const noteId = slug?.[0];

	if (!noteId) {
		return (
			<div className="flex h-full items-center justify-center text-xl text-foreground">
				You have not selected any note!
			</div>
		);
	}

	try {
		const { note, isOwner } = await getNoteById(noteId);

		return <NoteEditor note={note} isOwner={isOwner} />;
	} catch (err) {
		notFound();
	}
};

export default EditNotePage;
