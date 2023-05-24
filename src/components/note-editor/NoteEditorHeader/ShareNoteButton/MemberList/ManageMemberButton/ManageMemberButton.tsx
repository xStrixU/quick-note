import { MdExpandMore } from 'react-icons/md';

import { getManageMemberPermissionLabel } from './manageMember.utils';
import { ManageMemberDropdownMenu } from './ManageMemberDropdownMenu';

import type { NoteMemberPermission } from '@prisma/client';

import type { Note } from '@/server/modules/notes/notes.schemas';
import type { SimpleUser } from '@/server/modules/users/users.schemas';

type ManageMemberButtonProps = Readonly<{
	note: Note;
	member: SimpleUser;
	permission: NoteMemberPermission;
}>;

export const ManageMemberButton = ({
	note,
	member,
	permission,
}: ManageMemberButtonProps) => {
	const permissionLabel = getManageMemberPermissionLabel(permission);

	return (
		<ManageMemberDropdownMenu
			note={note}
			member={member}
			permission={permission}
		>
			<button className="flex items-center gap-0.5 rounded py-1 pl-1.5 pr-0.5 text-xs text-neutral-500 hover:bg-gray-300">
				{permissionLabel}
				<MdExpandMore size={18} />
			</button>
		</ManageMemberDropdownMenu>
	);
};
