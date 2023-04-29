import { useSession } from 'next-auth/react';

import { LoggedInUserDropdownMenu } from './LoggedInUserDropdownMenu';

import { UserAvatar } from '@/components/shared/UserAvatar';

export const LoggedInUser = () => {
	const { data: session } = useSession();

	if (!session?.user) return null;

	const { user } = session;

	return (
		<div className="mt-auto">
			<LoggedInUserDropdownMenu>
				<button className="flex w-full items-center gap-2 rounded p-2 hover:bg-gray-800/10 dark:hover:bg-white/10">
					<UserAvatar user={user} />
					<div className="overflow-hidden text-left">
						<p className="truncate font-medium leading-3">{user.name}</p>
						<p className="truncate text-sm">{user.email}</p>
					</div>
				</button>
			</LoggedInUserDropdownMenu>
		</div>
	);
};
