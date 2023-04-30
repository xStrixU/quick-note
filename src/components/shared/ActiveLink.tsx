import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type ActiveLinkProps<T> = Readonly<{
	notActiveClassName?: string;
	activeClassName?: string;
	exact?: boolean;
}> &
	ComponentProps<typeof Link<T>>;

export const ActiveLink = <T,>({
	href,
	className,
	notActiveClassName,
	activeClassName,
	exact,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href.toString()
		: pathname?.startsWith(href.toString());

	return (
		<Link
			href={href}
			className={twMerge(
				className,
				!isActive && notActiveClassName,
				isActive && activeClassName
			)}
			{...props}
		/>
	);
};
