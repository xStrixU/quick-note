'use client';

import { useRef, useState } from 'react';

import { LoggedInUser } from './LoggedInUser/LoggedInUser';
import { NoteListSection } from './NoteListSection/NoteListSection';
import { SidebarHeader } from './SidebarHeader';
import { SidebarResizer } from './SidebarResizer';

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
			<SidebarHeader />
			<section className="flex flex-col">
				<NoteListSection title="Private notes" isPrivate />
				<NoteListSection title="External notes" />
			</section>
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
