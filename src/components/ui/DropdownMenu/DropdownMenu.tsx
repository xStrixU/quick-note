import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuItems } from './DropdownMenuItems';

import type { ReactNode } from 'react';

type DropdownMenuProps = Readonly<{
	fullWidth?: boolean;
	children: ReactNode;
}>;

export const DropdownMenu = ({ fullWidth, children }: DropdownMenuProps) => {
	return (
		<Menu
			as="div"
			className={twMerge(
				'relative text-neutral-800 dark:text-neutral-300',
				fullWidth && 'w-full'
			)}
		>
			{children}
		</Menu>
	);
};

DropdownMenu.Button = Menu.Button;
DropdownMenu.Items = DropdownMenuItems;
DropdownMenu.Item = DropdownMenuItem;
