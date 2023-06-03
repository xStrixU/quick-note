import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type SwitchProps = Readonly<{
	checked: boolean;
	onChange: () => void;
	'aria-label'?: string;
}>;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
	({ checked, ...props }, ref) => (
		<input
			type="checkbox"
			role="switch"
			ref={ref}
			aria-checked={checked}
			checked={checked}
			className={twMerge(
				'relative h-6 w-10 cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors before:absolute before:left-1 before:top-1 before:h-[16px] before:w-[16px] before:rounded-full before:bg-white before:transition-all before:duration-200 dark:bg-neutral-700 dark:before:bg-neutral-200 [&:checked]:before:left-[calc(100%-0.25rem)] [&:checked]:before:-translate-x-full',
				checked && 'bg-primary'
			)}
			{...props}
		/>
	)
);

Switch.displayName = 'Switch';
