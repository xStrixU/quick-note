import Link from 'next/link';

import { NoteListItemIcon } from './NoteListItemIcon';

type NoteListItemProps = Readonly<{
	title: string;
	icon: string | null;
}>;

export const NoteListItem = ({ title, icon }: NoteListItemProps) => (
	<li>
		<Link
			href="/"
			className="flex rounded p-1 pl-3 hover:bg-gray-200 dark:hover:bg-neutral-700"
		>
			<NoteListItemIcon icon={icon} />
			<p className="ml-1.5 truncate">{title}</p>
		</Link>
	</li>
);
