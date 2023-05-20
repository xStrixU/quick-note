import { BsArrowLeftShort } from 'react-icons/bs';

import { useInviteContext } from './InviteProvider';

type ShareNoteHeaderProps = Readonly<{
	clearInput: () => void;
}>;

export const ShareNoteHeader = ({ clearInput }: ShareNoteHeaderProps) => {
	const { isInviteEnable, disableInvite, dispatchSelectedUsers } =
		useInviteContext();

	const handleBackClick = () => {
		disableInvite();
		clearInput();
		dispatchSelectedUsers({ type: 'clear' });
	};

	return (
		<div className="mb-1 flex items-center gap-0.5">
			{isInviteEnable && (
				<button onClick={handleBackClick}>
					<BsArrowLeftShort size={20} />
				</button>
			)}
			<p className="text-sm font-medium">
				{isInviteEnable ? 'Invite people' : 'Share note'}
			</p>
		</div>
	);
};
