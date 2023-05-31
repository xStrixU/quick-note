import { SidebarAside } from './SidebarAside';

import { getAllNotes } from '@/lib/notes';

export const Sidebar = async () => {
	try {
		const { privateNotes, externalNotes } = await getAllNotes();

		return (
			<SidebarAside privateNotes={privateNotes} externalNotes={externalNotes} />
		);
	} catch {
		return null;
	}
};
