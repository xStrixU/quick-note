import { trpc } from '@/lib/trpc';

export const useGetNoteMembersById = (id: string) => {
	const query = trpc.notes.getMembersById.useQuery({ id });

	return query;
};
