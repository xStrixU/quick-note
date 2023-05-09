import { trpc } from '@/lib/trpc';

import type { Note } from '@/server/modules/notes/notes.schemas';

interface DeleteNoteArgs {
	id: string;
	onSuccess?: (note: Note) => void;
}

export const useDeleteNoteById = () => {
	const deleteNoteByIdMutation = trpc.notes.deleteById.useMutation();

	return ({ id, onSuccess }: DeleteNoteArgs) => {
		deleteNoteByIdMutation.mutate({ id }, { onSuccess });
	};
};
