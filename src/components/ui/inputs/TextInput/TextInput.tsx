import { forwardRef, useId } from 'react';
import { MdError } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

import { AddonWrapper } from './AddonWrapper';

import type { ReactNode } from 'react';

type TextInputProps = Readonly<{
	label?: string;
	leftIcon?: ReactNode;
	leftSection?: ReactNode;
	rightIcon?: ReactNode;
	rightSection?: ReactNode;
	error?: string;
}> &
	JSX.IntrinsicElements['input'];

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	(
		{
			label,
			placeholder,
			required,
			leftIcon,
			leftSection,
			rightIcon,
			rightSection,
			error,
			...props
		},
		ref
	) => {
		const id = useId();

		return (
			<div className="text-sm">
				{label && (
					<label htmlFor={id} className="mb-8 text-foreground">
						{label}
						{required && (
							<span className="ml-1 text-red-600 dark:text-red-400">*</span>
						)}
					</label>
				)}
				<div
					className={twMerge(
						'flex h-9 rounded border border-gray-300 transition-colors focus-within:border-primary dark:border-gray-500',
						error && 'border-red-600 dark:border-red-400'
					)}
				>
					{leftIcon ? (
						<AddonWrapper isIcon>{leftIcon}</AddonWrapper>
					) : (
						leftSection && <AddonWrapper>{leftSection}</AddonWrapper>
					)}
					<input
						ref={ref}
						id={id}
						placeholder={placeholder || label}
						required={required}
						type="text"
						className={twMerge(
							'grow bg-transparent text-foreground outline-none dark:placeholder:text-gray-400',
							!leftIcon && !leftSection && 'pl-2.5',
							!rightIcon && !rightSection && 'pr-2.5'
						)}
						{...props}
					/>
					{rightIcon ? (
						<AddonWrapper isIcon>{rightIcon}</AddonWrapper>
					) : (
						rightSection && <AddonWrapper>{rightSection}</AddonWrapper>
					)}
				</div>
				{error && (
					<p className="mt-0.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
						<MdError />
						{error}
					</p>
				)}
			</div>
		);
	}
);

TextInput.displayName = 'TextInput';
