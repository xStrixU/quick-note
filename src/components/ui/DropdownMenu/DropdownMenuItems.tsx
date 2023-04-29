import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownMenuItemsProps = Readonly<{
	above?: boolean;
	children: ReactNode;
}>;

export const DropdownMenuItems = ({
	above,
	children,
}: DropdownMenuItemsProps) => (
	<Menu.Items
		className={twMerge(
			'absolute left-0 w-full max-w-[16rem] rounded border border-zinc-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-900',
			!above && '-bottom-2 translate-y-full',
			above && '-top-2 -translate-y-full'
		)}
	>
		{children}
	</Menu.Items>
);
