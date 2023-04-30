import { trpc } from '@/lib/trpc';

export const useGetAllNotes = () => {
	const query = trpc.notes.getAll.useQuery();

	return query;
};
