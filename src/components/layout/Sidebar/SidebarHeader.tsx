import { APP_NAME } from '@/lib/constants';

export const SidebarHeader = () => (
	<header className="mb-3 border-b border-neutral-300 pb-1.5 dark:border-neutral-700">
		<h1 className="truncate text-2xl font-bold tracking-wide">{APP_NAME}</h1>
	</header>
);
