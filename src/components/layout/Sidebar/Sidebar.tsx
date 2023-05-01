'use client';

import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { LoggedInUser } from './LoggedInUser/LoggedInUser';
import { SidebarResizer } from './SidebarResizer';
import { UserNotes } from './UserNotes/UserNotes';

import { APP_NAME } from '@/lib/constants';

export const Sidebar = () => {
	const params = useParams();
	const sidebarRef = useRef(null);
	const [sidebarWidth, setSidebarWidth] = useState(280);

	const isNoteOpen = Boolean(params.slug);

	const updateSidebarWidth = (width: number) => {
		setSidebarWidth(width);
	};

	return (
		<aside
			ref={sidebarRef}
			style={{ width: sidebarWidth }}
			className={twMerge(
				'app-scrollbar relative flex shrink-0 grow transform-gpu select-none flex-col overflow-y-auto overflow-x-hidden border-r border-neutral-200 bg-neutral-100 p-4 text-neutral-800 transition dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 desktop:grow-0',
				!isNoteOpen && 'translate-x-0',
				isNoteOpen &&
					'absolute h-full -translate-x-full desktop:relative desktop:translate-x-0'
			)}
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
