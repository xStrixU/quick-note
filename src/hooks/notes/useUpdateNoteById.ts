import { trpc } from '@/lib/trpc';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

interface UpdateNoteArgs {
	id: string;
	data: Partial<{ title: string | null; content: string }>;
	onSuccess?: (note: NoteDetails) => void;
}

export const useUpdateNoteById = () => {
	const utils = trpc.useContext();
	const updateNoteByIdMutation = trpc.notes.updateNoteById.useMutation();

	return ({ id, data, onSuccess }: UpdateNoteArgs) => {
		updateNoteByIdMutation.mutate(
			{ id, data },
			{
				onSuccess: note => {
					void utils.notes.getById.refetch();
					onSuccess?.(note);
				},
			}
		);
	};
};
