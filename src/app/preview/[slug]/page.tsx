import { notFound } from 'next/navigation';

import { NotePreview } from '@/components/note-preview/NotePreview';

import { getNotePreviewById } from '@/lib/notes';

import type { Params } from '@/types/next';

type NotePageProps = Readonly<{
	params: Params<'slug'>;
}>;

const NotePage = async ({ params: { slug } }: NotePageProps) => {
	try {
		const note = await getNotePreviewById(slug);

		return <NotePreview note={note} />;
	} catch {
		notFound();
	}
};

export default NotePage;
