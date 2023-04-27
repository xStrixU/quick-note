'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { LoadingSpinner } from './LoadingSpinner';

import type { ReactNode } from 'react';

type PrivateRouteProps = Readonly<{
	notLoggedIn?: boolean;
	children: ReactNode;
}>;

export const PrivateRoute = ({ notLoggedIn, children }: PrivateRouteProps) => {
	const router = useRouter();
	const { status, data: session } = useSession({
		required: !notLoggedIn,
		onUnauthenticated() {
			router.replace('/sign-in');
		},
	});

	useEffect(() => {
		if (notLoggedIn && session) {
			router.replace('/');
		}
	}, [notLoggedIn, router, session]);

	if (status === 'loading') {
		return (
			<main className="flex h-full items-center justify-center">
				<LoadingSpinner />
			</main>
		);
	}

	if (notLoggedIn && session) {
		return null;
	}

	return <>{children}</>;
};
