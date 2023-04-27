import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { trpc, trpcClient } from '@/lib/trpc';

import type { ReactNode } from 'react';

type TrpcProviderProps = Readonly<{
	children: ReactNode;
}>;

const queryClient = new QueryClient();

export const TrpcProvider = ({ children }: TrpcProviderProps) => (
	<trpc.Provider client={trpcClient} queryClient={queryClient}>
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	</trpc.Provider>
);
