import { PrivateRoute } from '@/components/shared/PrivateRoute';

import type { ReactNode } from 'react';

const MainLayout = ({ children }: { readonly children: ReactNode }) => (
	<PrivateRoute>{children}</PrivateRoute>
);

export default MainLayout;
