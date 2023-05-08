import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownMenuItemsProps = Readonly<{
	above?: boolean;
	fullWidth?: boolean;
	direction?: 'right' | 'left';
	children: ReactNode;
}>;

export const DropdownMenuItems = ({
	above,
	fullWidth,
	direction = 'right',
	children,
}: DropdownMenuItemsProps) => (
	<Menu.Items
		className={twMerge(
			'absolute z-50 w-64 rounded border border-zinc-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900',
			!above && '-bottom-2 translate-y-full',
			above && '-top-2 -translate-y-full',
			fullWidth && 'w-full',
			direction === 'left' && 'right-0',
			direction === 'right' && 'left-0'
		)}
	>
		{children}
	</Menu.Items>
);
