import { Menu } from '@headlessui/react';
import { NoteMemberPermission } from '@prisma/client';
import { Fragment } from 'react';
import { toast } from 'react-hot-toast';
import { RiCheckLine } from 'react-icons/ri';

import { getManageMemberPermissionLabel } from './manageMember.utils';

import { DropdownMenu } from '@/components/ui/DropdownMenu/DropdownMenu';

import { useDeleteNoteMember } from '@/hooks/notes/useDeleteNoteMember';
import { useUpdateNoteMember } from '@/hooks/notes/useUpdateNoteMember';

import type { ReactNode } from 'react';

import type { Note } from '@/server/modules/notes/notes.schemas';
import type { SimpleUser } from '@/server/modules/users/users.schemas';

type ManageMemberDropdownMenuProps = Readonly<{
	note: Note;
	member: SimpleUser;
	permission: NoteMemberPermission;
	children: ReactNode;
}>;

export const ManageMemberDropdownMenu = ({
	note,
	member,
	permission,
	children,
}: ManageMemberDropdownMenuProps) => {
	const { updateNoteMember } = useUpdateNoteMember();
	const { deleteNoteMember } = useDeleteNoteMember();

	const permissions = Object.keys(
		NoteMemberPermission
	) as NoteMemberPermission[];

	const handleMemberPermissionClick =
		(newPermission: NoteMemberPermission) => async () => {
			try {
				await updateNoteMember({
					noteId: note.id,
					memberId: member.id,
					data: { permission: newPermission },
				});
			} catch {
				toast.error('Failed to update member permission');
			}
		};

	const handleMemberRemoveClick = () => {
		const confirmed = confirm('Are you sure you want to delete this member?');

		if (!confirmed) return;

		void toast.promise(
			deleteNoteMember({ noteId: note.id, memberId: member.id }),
			{
				loading: 'Deleting member...',
				success: 'Successfully deleted member',
				error: 'Failed to delete member',
			}
		);
	};

	return (
		<Menu>
			<DropdownMenu.Button as={Fragment}>{children}</DropdownMenu.Button>
			<div className="absolute bottom-14 right-0 z-50">
				<DropdownMenu.Items direction="left">
					{permissions.map(notePermission => (
						<DropdownMenu.Item
							key={notePermission}
							onClick={handleMemberPermissionClick(notePermission)}
						>
							{getManageMemberPermissionLabel(notePermission)}
							{permission === notePermission && (
								<RiCheckLine className="ml-auto" />
							)}
						</DropdownMenu.Item>
					))}
					<DropdownMenu.Item onClick={handleMemberRemoveClick}>
						<span className="text-red-500">Remove</span>
					</DropdownMenu.Item>
				</DropdownMenu.Items>
			</div>
		</Menu>
	);
};
