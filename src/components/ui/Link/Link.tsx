import NextLink from 'next/link';

import type { ComponentProps } from 'react';

type LinkProps<T> = ComponentProps<typeof NextLink<T>>;

export const Link = <T,>(props: LinkProps<T>) => (
	<NextLink
		className="text-indigo-600 hover:text-indigo-700 hover:underline active:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-400 dark:active:text-indigo-600"
		{...props}
	/>
);
