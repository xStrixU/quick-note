import { trpc } from '@/lib/trpc';

export const useDeleteNoteById = () => {
	const deleteNoteByIdMutation = trpc.notes.deleteById.useMutation();

	const deleteNoteById = (id: string) =>
		deleteNoteByIdMutation.mutateAsync({ id });

	return { deleteNoteById, ...deleteNoteByIdMutation };
};
