import { trpc } from '@/lib/trpc';

import type { Note } from '@/server/modules/notes/notes.schemas';

interface CreateNoteArgs {
	onSuccess?: (note: Note) => void;
}

export const useCreateNote = () => {
	const utils = trpc.useContext();
	const createNoteMutation = trpc.notes.create.useMutation();

	return ({ onSuccess }: CreateNoteArgs = {}) => {
		createNoteMutation.mutate(undefined, {
			onSuccess: note => {
				void utils.notes.getAll.invalidate();
				onSuccess?.(note);
			},
		});
	};
};
