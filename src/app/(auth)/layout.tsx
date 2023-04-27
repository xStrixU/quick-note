import { PrivateRoute } from '@/components/shared/PrivateRoute';

import type { ReactNode } from 'react';

const AuthLayout = ({ children }: { readonly children: ReactNode }) => (
	<PrivateRoute notLoggedIn>
		<main className="flex h-full items-center justify-center">{children}</main>
	</PrivateRoute>
);

export default AuthLayout;
