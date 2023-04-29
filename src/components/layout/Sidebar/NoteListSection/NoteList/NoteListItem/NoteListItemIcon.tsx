import Image from 'next/image';

import DefaultNoteIcon from '@/assets/svg/default-note-icon.svg';

type NoteListItemIconProps = Readonly<{
	icon: string | null;
}>;

export const NoteListItemIcon = ({ icon }: NoteListItemIconProps) => (
	<button
		type="button"
		title="Change icon"
		aria-label="Change icon"
		className="flex h-6 w-6 shrink-0 items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-neutral-600"
		onClick={e => e.preventDefault()}
	>
		{icon ? (
			<Image src={icon} alt="Note icon" width={17} height={17} />
		) : (
			<DefaultNoteIcon />
		)}
	</button>
);
