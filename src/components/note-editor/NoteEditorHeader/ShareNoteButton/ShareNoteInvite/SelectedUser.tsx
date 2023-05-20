import { IoClose } from 'react-icons/io5';

import { useInviteContext } from '../InviteProvider';

import type { SimpleUser } from '@/server/modules/users/users.schemas';

type SelectedUserProps = Readonly<{
	user: SimpleUser;
}>;

export const SelectedUser = ({ user }: SelectedUserProps) => {
	const { dispatchSelectedUsers } = useInviteContext();

	return (
		<button
			onClick={() => dispatchSelectedUsers({ type: 'remove', userId: user.id })}
			className="flex h-5 shrink-0 items-center rounded bg-neutral-300 p-1 text-sm"
		>
			{user.name}
			<IoClose className="hover:fill-icon hover:text-brand-default" />
		</button>
	);
};
