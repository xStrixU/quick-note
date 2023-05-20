import { toast } from 'react-hot-toast';

import { useInviteContext } from '../InviteProvider';
import { ShareNoteInviteInput } from './ShareNoteInviteInput';

import { Button } from '@/components/ui/Button/Button';

import { useInviteToNoteById } from '@/hooks/notes/useInviteToNote';

import type { Note } from '@/server/modules/notes/notes.schemas';

type ShareNoteInviteProps = Readonly<{
	note: Note;
	inputValue: string;
	setInputValue: (value: string) => void;
}>;

export const ShareNoteInvite = ({
	note,
	inputValue,
	setInputValue,
}: ShareNoteInviteProps) => {
	const {
		isInviteEnable,
		selectedUsers,
		dispatchSelectedUsers,
		disableInvite,
	} = useInviteContext();
	const { inviteToNoteById } = useInviteToNoteById();

	const handleInviteClick = () => {
		if (!isInviteEnable) return;

		const userIds = selectedUsers.map(({ id }) => id);

		void toast.promise(inviteToNoteById({ id: note.id, userIds }), {
			loading: 'Inviting...',
			success: 'Successfully invited to note',
			error: 'Failed to invite to note',
		});
		dispatchSelectedUsers({ type: 'clear' });
		disableInvite();
	};

	return (
		<div className="mb-1 flex items-center gap-1.5">
			<div className="grow">
				<ShareNoteInviteInput value={inputValue} setValue={setInputValue} />
			</div>
			<Button size="small" onClick={handleInviteClick}>
				Invite
			</Button>
		</div>
	);
};
