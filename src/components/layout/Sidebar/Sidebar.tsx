'use client';

import { useRef, useState } from 'react';

import { LoggedInUser } from './LoggedInUser/LoggedInUser';
import { SidebarResizer } from './SidebarResizer';
import { UserNotes } from './UserNotes/UserNotes';

import { APP_NAME } from '@/lib/constants';

export const Sidebar = () => {
	const sidebarRef = useRef(null);
	const [sidebarWidth, setSidebarWidth] = useState(280);

	const updateSidebarWidth = (width: number) => {
		setSidebarWidth(width);
	};

	return (
		<aside
			ref={sidebarRef}
			style={{ width: sidebarWidth }}
			className="app-scrollbar relative flex grow select-none flex-col overflow-y-auto overflow-x-hidden border-r border-neutral-200 bg-neutral-100 p-4 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 desktop:grow-0"
		>
			<h1 className="mb-3 shrink-0 truncate border-b border-neutral-300 pb-1.5 text-2xl font-bold tracking-wide dark:border-neutral-700">
				{APP_NAME}
			</h1>
			<UserNotes />
			<LoggedInUser />
			<SidebarResizer
				sidebarRef={sidebarRef}
				minWidth={220}
				maxWidth={480}
				updateWidth={updateSidebarWidth}
			/>
		</aside>
	);
};
