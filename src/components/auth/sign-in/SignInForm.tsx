'use client';

import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { useSignInForm } from './useSignInForm';

import { Button } from '@/components/ui/Button/Button';
import { PasswordInput } from '@/components/ui/inputs/PasswordInput/PasswordInput';
import { TextInput } from '@/components/ui/inputs/TextInput/TextInput';

export const SignInForm = () => {
	const {
		onSubmit,
		register,
		isLoading,
		formState: { errors },
	} = useSignInForm();

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3 flex flex-col gap-4">
				<TextInput
					type="email"
					label="Email"
					autoComplete="username"
					leftIcon={<MdAlternateEmail size={18} />}
					error={errors.email?.message}
					required
					{...register('email')}
				/>
				<PasswordInput
					label="Password"
					autoComplete="current-password"
					leftIcon={<HiOutlineLockClosed size={18} />}
					error={errors.password?.message}
					required
					{...register('password')}
				/>
			</div>
			<Button type="submit" isLoading={isLoading} fullWidth>
				Sign In
			</Button>
		</form>
	);
};
