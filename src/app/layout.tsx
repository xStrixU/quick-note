import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

export const metadata = {
	title: 'Notes App',
	description: 'Keep your thoughts organized and never miss an idea',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
