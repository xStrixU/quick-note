import { twMerge } from 'tailwind-merge';

import LoadingDots from '@/assets/svg/loading-dots.svg';

import type { ReactNode } from 'react';

const variants = {
	fill: 'bg-primary text-white',
	border: 'border border-foreground text-foreground',
} as const;

type ButtonProps = Readonly<{
	variant?: keyof typeof variants;
	isLoading?: boolean;
	fullWidth?: boolean;
	children: ReactNode;
}> &
	JSX.IntrinsicElements['button'];

export const Button = ({
	variant = 'fill',
	isLoading,
	fullWidth,
	children,
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={twMerge(
			'flex h-10 items-center justify-center rounded px-5 text-sm font-medium active:translate-y-px',
			variants[variant],
			fullWidth && 'w-full'
		)}
		{...props}
	>
		{isLoading ? <LoadingDots /> : children}
	</button>
);
