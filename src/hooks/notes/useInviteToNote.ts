import { trpc } from '@/lib/trpc';

interface InviteToNoteArgs {
	id: string;
	userIds: string[];
}

export const useInviteToNoteById = () => {
	const utils = trpc.useContext();
	const inviteToNoteByIdMutation = trpc.notes.inviteById.useMutation();

	const inviteToNoteById = ({ id, userIds }: InviteToNoteArgs) =>
		inviteToNoteByIdMutation.mutateAsync(
			{ id, userIds },
			{
				onSuccess: () => utils.notes.getMembersById.refetch(),
			}
		);

	return { inviteToNoteById, ...inviteToNoteByIdMutation };
};
