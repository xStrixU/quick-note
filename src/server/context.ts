import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

import type { inferAsyncReturnType } from '@trpc/server';

export const createContext = async () => {
	const session = await getServerSession(authOptions);

	return {
		session,
	};
};

export type Context = inferAsyncReturnType<typeof createContext>;
