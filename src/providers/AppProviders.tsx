'use client';

import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from './ThemeProvider';
import { TrpcProvider } from './TrpcProvider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<SessionProvider>
		<TrpcProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</TrpcProvider>
	</SessionProvider>
);
