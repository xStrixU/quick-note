import Image from 'next/image';

import { NoteListItemActionButton } from './NoteListItemActionButton';

import DefaultNoteIcon from '@/assets/svg/default-note-icon.svg';

type ChangeNoteIconActionButtonProps = Readonly<{
	icon: string | null;
}>;

export const ChangeNoteIconActionButton = ({
	icon,
}: ChangeNoteIconActionButtonProps) => (
	<NoteListItemActionButton
		label="Change icon"
		icon={
			icon ? (
				<Image src={icon} alt="Note icon" width={17} height={17} />
			) : (
				<DefaultNoteIcon />
			)
		}
		onClick={e => e.preventDefault()}
	/>
);
