import { trpc } from '@/lib/trpc';

interface UpdateNoteArgs {
	id: string;
	data: Partial<{ title: string | null; content: string; isShared: boolean }>;
}

export const useUpdateNoteById = () => {
	const updateNoteByIdMutation = trpc.notes.updateById.useMutation();

	const updateNoteById = ({ id, data }: UpdateNoteArgs) =>
		updateNoteByIdMutation.mutateAsync({ id, data });

	return { updateNoteById, ...updateNoteByIdMutation };
};
