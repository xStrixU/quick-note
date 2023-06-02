import { useInviteContext } from './InviteProvider';

import { UserAvatar } from '@/components/shared/UserAvatar';

import type { SimpleUser } from '@/server/modules/users/users.schemas';

type FoundUserListProps = Readonly<{
	users: SimpleUser[];
	clearInput: () => void;
}>;

export const FoundUserList = ({ users, clearInput }: FoundUserListProps) => {
	const { dispatchSelectedUsers } = useInviteContext();

	const handleUserClick = (user: SimpleUser) => () => {
		dispatchSelectedUsers({ type: 'add', user });
		clearInput();
	};

	return (
		<ul>
			{users.map(user => (
				<li key={user.id}>
					<div
						onClick={handleUserClick(user)}
						className="bg-neutral-background-selected flex h-12 cursor-pointer items-center rounded-sm px-3.5 hover:bg-gray-200 dark:hover:bg-neutral-800"
					>
						<UserAvatar user={user} />
						<p className="ml-2 truncate font-semibold">{user.name}</p>
					</div>
				</li>
			))}
		</ul>
	);
};
