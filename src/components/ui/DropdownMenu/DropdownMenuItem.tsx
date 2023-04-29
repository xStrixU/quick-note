import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownMenuItemProps = Readonly<{
	icon?: ReactNode;
	children: ReactNode;
	onClick: () => void;
}>;

export const DropdownMenuItem = ({
	icon,
	children,
	onClick,
}: DropdownMenuItemProps) => (
	<Menu.Item>
		{({ active }) => (
			<button
				type="button"
				onClick={onClick}
				className={twMerge(
					'flex w-full items-center gap-1.5 px-3 py-1.5',
					active && 'bg-gray-200 dark:bg-neutral-800'
				)}
			>
				{icon}
				{children}
			</button>
		)}
	</Menu.Item>
);
