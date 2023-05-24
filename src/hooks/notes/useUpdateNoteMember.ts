import { trpc } from '@/lib/trpc';

import type { NoteMemberPermission } from '@prisma/client';

interface UpdateNoteArgs {
	noteId: string;
	memberId: string;
	data: Partial<{ permission: NoteMemberPermission }>;
}

export const useUpdateNoteMember = () => {
	const utils = trpc.useContext();
	const updateNoteMemberMutation = trpc.notes.updateMember.useMutation();

	const updateNoteMember = ({ noteId, memberId, data }: UpdateNoteArgs) =>
		updateNoteMemberMutation.mutateAsync(
			{ id: noteId, memberId, data },
			{ onSuccess: () => utils.notes.getMembersById.refetch() }
		);

	return { updateNoteMember, ...updateNoteMemberMutation };
};
