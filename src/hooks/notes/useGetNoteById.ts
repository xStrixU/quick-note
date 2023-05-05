import { trpc } from '@/lib/trpc';

export const useGetNoteById = (id: string) => {
	const query = trpc.notes.getById.useQuery({ id });

	return query;
};
