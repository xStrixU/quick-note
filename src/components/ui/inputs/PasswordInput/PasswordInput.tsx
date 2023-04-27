'use client';

import { forwardRef, useState } from 'react';

import { TextInput } from '../TextInput/TextInput';
import { TogglePasswordButton } from './TogglePasswordButton';

import type { ComponentProps } from 'react';

type PasswordInputProps = Omit<
	ComponentProps<typeof TextInput>,
	'type' | 'rightSection'
>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	(props, ref) => {
		const [isPasswordShown, setIsPasswordShown] = useState(false);

		return (
			<TextInput
				ref={ref}
				type={isPasswordShown ? 'text' : 'password'}
				rightSection={
					<TogglePasswordButton
						isPasswordShown={isPasswordShown}
						onClick={() =>
							setIsPasswordShown(isPasswordShown => !isPasswordShown)
						}
					/>
				}
				{...props}
			/>
		);
	}
);

PasswordInput.displayName = 'PasswordInput';
