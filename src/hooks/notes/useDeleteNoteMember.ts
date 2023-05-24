import { trpc } from '@/lib/trpc';

interface DeleteNoteArgs {
	noteId: string;
	memberId: string;
}

export const useDeleteNoteMember = () => {
	const utils = trpc.useContext();
	const deleteNoteMemberMutation = trpc.notes.deleteMember.useMutation();

	const deleteNoteMember = ({ noteId, memberId }: DeleteNoteArgs) =>
		deleteNoteMemberMutation.mutateAsync(
			{ id: noteId, memberId },
			{ onSuccess: () => utils.notes.getMembersById.refetch() }
		);

	return { deleteNoteMember, ...deleteNoteMemberMutation };
};
