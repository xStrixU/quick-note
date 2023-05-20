import { UserAvatar } from '@/components/shared/UserAvatar';

import type { SimpleUser } from '@/server/modules/users/users.schemas';

type MemberListItemProps = Readonly<{
	member: SimpleUser;
}>;

export const MemberListItem = ({ member }: MemberListItemProps) => (
	<li>
		<div className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-200">
			<UserAvatar user={member} />
			<span className="truncate text-sm">{member.name}</span>
		</div>
	</li>
);
