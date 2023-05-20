import { trpc } from '@/lib/trpc';

export const useFindUsers = (search: string) => {
	const query = trpc.users.find.useQuery({ search }, { enabled: !!search });

	return query;
};
