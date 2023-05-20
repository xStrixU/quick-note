'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useDebouncedCallback } from 'use-debounce';

import { useUpdateNoteById } from '@/hooks/notes/useUpdateNoteById';
import { DEFAULT_NOTE_TITLE } from '@/lib/constants';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteTitleEditorProps = Readonly<{
	note: NoteDetails;
}>;

export const NoteTitleEditor = ({ note }: NoteTitleEditorProps) => {
	const router = useRouter();
	const { updateNoteById } = useUpdateNoteById();

	const debounced = useDebouncedCallback(async (value: string) => {
		try {
			await updateNoteById({
				id: note.id,
				data: { title: value || null },
			});

			router.refresh();
		} catch {
			toast.error('Failed to update note title');
		}
	}, 500);

	return (
		<input
			type="text"
			placeholder={DEFAULT_NOTE_TITLE}
			defaultValue={note.title ?? ''}
			onChange={({ target }) => debounced(target.value)}
			className="mt-2 bg-transparent px-4 text-2xl font-bold text-foreground outline-none"
		/>
	);
};
