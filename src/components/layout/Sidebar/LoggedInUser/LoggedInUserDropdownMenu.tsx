import { signOut } from 'next-auth/react';
import { Fragment } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { DropdownMenu } from '@/components/ui/DropdownMenu/DropdownMenu';

import type { ReactNode } from 'react';

type LoggedInUserDropdownMenuProps = Readonly<{
	children: ReactNode;
}>;

export const LoggedInUserDropdownMenu = ({
	children,
}: LoggedInUserDropdownMenuProps) => (
	<DropdownMenu>
		<DropdownMenu.Button as={Fragment}>{children}</DropdownMenu.Button>
		<DropdownMenu.Items above fullWidth>
			<DropdownMenu.Item icon={<FiLogOut />} onClick={() => signOut()}>
				Logout
			</DropdownMenu.Item>
		</DropdownMenu.Items>
	</DropdownMenu>
);
