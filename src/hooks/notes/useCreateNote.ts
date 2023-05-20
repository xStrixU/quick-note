import { trpc } from '@/lib/trpc';

export const useCreateNote = () => {
	const createNoteMutation = trpc.notes.create.useMutation();

	const createNote = () => createNoteMutation.mutateAsync(undefined);

	return { createNote, ...createNoteMutation };
};
