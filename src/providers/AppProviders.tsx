'use client';

import { SessionProvider } from 'next-auth/react';

import { TrpcProvider } from './TrpcProvider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<SessionProvider>
		<TrpcProvider>{children}</TrpcProvider>
	</SessionProvider>
);
