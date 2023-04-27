import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type AddonWrapperProps = Readonly<{
	isIcon?: boolean;
	children: ReactNode;
}>;

export const AddonWrapper = ({ isIcon, children }: AddonWrapperProps) => (
	<div
		className={twMerge(
			'flex items-center text-gray-500 dark:text-gray-400',
			isIcon && 'px-2'
		)}
	>
		{children}
	</div>
);
