import { useParams, useRouter } from 'next/navigation';
import { BsTrash } from 'react-icons/bs';

import { NoteListItemActionButton } from './NoteListItemActionButton';

import { useDeleteNoteById } from '@/hooks/notes/useDeleteNoteById';

import type { MouseEvent } from 'react';

import type { Note } from '@/server/modules/notes/notes.schemas';

type DeleteNoteActionButtonProps = Readonly<{
	note: Note;
}>;

export const DeleteNoteActionButton = ({
	note,
}: DeleteNoteActionButtonProps) => {
	const params = useParams();
	const router = useRouter();
	const deleteNoteById = useDeleteNoteById();

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const confirmed = confirm('Are you sure you want to delete this note?');

		if (!confirmed) return;

		deleteNoteById({
			id: note.id,
			onSuccess: () => {
				router.refresh();

				if (params.slug === note.id) {
					router.replace('/');
				}
			},
		});
	};

	return (
		<NoteListItemActionButton
			label="Delete note"
			icon={<BsTrash />}
			onClick={handleClick}
		/>
	);
};
