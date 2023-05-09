import { trpc } from '@/lib/trpc';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

interface UpdateNoteArgs {
	id: string;
	data: Partial<{ title: string | null; content: string; isShared: boolean }>;
	onSuccess?: (note: NoteDetails) => void;
}

export const useUpdateNoteById = () => {
	const updateNoteByIdMutation = trpc.notes.updateById.useMutation();

	return ({ id, data, onSuccess }: UpdateNoteArgs) => {
		updateNoteByIdMutation.mutate({ id, data }, { onSuccess });
	};
};
