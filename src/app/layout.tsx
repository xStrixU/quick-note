import { ClientToaster } from '@/components/shared/ClientToaster';

import { APP_NAME } from '@/lib/constants';
import { AppProviders } from '@/providers/AppProviders';

import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

export const metadata = {
	title: {
		default: APP_NAME,
		template: `%s | ${APP_NAME}`,
	},
	description: `${APP_NAME} - Keep your thoughts organized and never miss an idea!`,
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en">
		<body>
			<AppProviders>{children}</AppProviders>
			<ClientToaster />
		</body>
	</html>
);

export default RootLayout;
