import { trpc } from '@/lib/trpc';

export const useCreateNote = () => {
	const utils = trpc.useContext();
	const createNoteMutation = trpc.notes.create.useMutation();

	return () => {
		createNoteMutation.mutate(undefined, {
			onSuccess: () => utils.notes.getAll.invalidate(),
		});
	};
};
