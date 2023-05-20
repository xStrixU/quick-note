'use client';

import { Fragment, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { FoundUserList } from './FoundUserList';
import { useInviteContext } from './InviteProvider';
import { MemberList } from './MemberList/MemberList';
import { ShareNoteHeader } from './ShareNoteHeader';
import { ShareNoteInvite } from './ShareNoteInvite/ShareNoteInvite';
import { ShareNoteToWeb } from './ShareNoteToWeb/ShareNoteToWeb';

import { DropdownMenu } from '@/components/ui/DropdownMenu/DropdownMenu';

import { useGetNoteMembersById } from '@/hooks/notes/useGetNoteMembersById';
import { useFindUsers } from '@/hooks/users/useFindUsers';

import type { ReactNode } from 'react';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type ShareNoteDropdownMenuProps = Readonly<{
	note: NoteDetails;
	children: ReactNode;
}>;

export const ShareNoteDropdownMenu = ({
	note,
	children,
}: ShareNoteDropdownMenuProps) => {
	const { isInviteEnable, selectedUsers } = useInviteContext();
	const { data: members } = useGetNoteMembersById(note.id);
	const [isShareToWebChecked, setIsShareToWebChecked] = useState(note.isShared);
	const [inviteInputValue, setInviteInputValue] = useState('');
	const [debouncedInviteInputValue] = useDebounce(inviteInputValue, 500);
	const { data: foundUsers, isLoading } = useFindUsers(
		debouncedInviteInputValue
	);
	const filteredFoundUsers = foundUsers?.filter(
		foundUser =>
			!selectedUsers.find(selectedUser => selectedUser.id === foundUser.id) &&
			!members?.find(member => member.id === foundUser.id)
	);

	return (
		<DropdownMenu>
			<DropdownMenu.Button as={Fragment}>{children}</DropdownMenu.Button>
			<DropdownMenu.Items direction="left" size="large">
				<ShareNoteHeader clearInput={() => setInviteInputValue('')} />
				<ShareNoteInvite
					note={note}
					inputValue={inviteInputValue}
					setInputValue={value => setInviteInputValue(value)}
				/>
				{isInviteEnable ? (
					filteredFoundUsers?.length ? (
						<FoundUserList
							users={filteredFoundUsers}
							clearInput={() => setInviteInputValue('')}
						/>
					) : (
						<p className="text-sm">
							{isLoading && inviteInputValue ? 'Loading...' : 'Not found'}
						</p>
					)
				) : (
					<>
						<MemberList note={note} />
						<ShareNoteToWeb
							isChecked={isShareToWebChecked}
							note={note}
							toggle={() => setIsShareToWebChecked(prev => !prev)}
						/>
					</>
				)}
			</DropdownMenu.Items>
		</DropdownMenu>
	);
};
