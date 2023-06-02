import { ManageMemberButton } from './ManageMemberButton/ManageMemberButton';

import { UserAvatar } from '@/components/shared/UserAvatar';

import type { NoteMemberPermission } from '@prisma/client';

import type { Note } from '@/server/modules/notes/notes.schemas';
import type { SimpleUser } from '@/server/modules/users/users.schemas';

type MemberListItemProps = Readonly<{
	note: Note;
	member: SimpleUser;
	permission: NoteMemberPermission;
}>;

export const MemberListItem = ({
	note,
	member,
	permission,
}: MemberListItemProps) => (
	<li>
		<div className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-neutral-800">
			<UserAvatar user={member} />
			<span className="mr-auto truncate text-sm">{member.name}</span>
			<ManageMemberButton note={note} member={member} permission={permission} />
		</div>
	</li>
);
