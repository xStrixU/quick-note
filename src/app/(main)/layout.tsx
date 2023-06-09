import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { PrivateRoute } from '@/components/shared/PrivateRoute';

import type { ReactNode } from 'react';

const MainLayout = ({ children }: { readonly children: ReactNode }) => (
	<PrivateRoute>
		<div className="flex h-full overflow-hidden">
			{/* @ts-expect-error Async Server Component */}
			<Sidebar />
			{children}
		</div>
	</PrivateRoute>
);

export default MainLayout;
