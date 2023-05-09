import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import LoadingDots from '@/assets/svg/loading-dots.svg';

import type { ReactNode } from 'react';

const variants = {
	fill: 'bg-primary text-white',
	border: 'border border-foreground text-foreground',
} as const;

const sizes = {
	small: 'h-7 px-3 font-normal',
	medium: 'h-10 px-5',
} as const;

type ButtonProps = Readonly<{
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	isLoading?: boolean;
	fullWidth?: boolean;
	children: ReactNode;
}> &
	JSX.IntrinsicElements['button'];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'fill',
			size = 'medium',
			isLoading,
			fullWidth,
			children,
			...props
		},
		ref
	) => (
		<button
			type="button"
			ref={ref}
			className={twMerge(
				'flex items-center justify-center rounded text-sm font-medium active:translate-y-px',
				variants[variant],
				sizes[size],
				fullWidth && 'w-full'
			)}
			{...props}
		>
			{isLoading ? <LoadingDots /> : children}
		</button>
	)
);

Button.displayName = 'Button';
