'use client';

import { BiUser } from 'react-icons/bi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';

import { useSignUpForm } from './useSignUpForm';

import { Button } from '@/components/ui/Button/Button';
import { PasswordInput } from '@/components/ui/inputs/PasswordInput/PasswordInput';
import { TextInput } from '@/components/ui/inputs/TextInput/TextInput';

export const SignUpForm = () => {
	const {
		onSubmit,
		register,
		isLoading,
		formState: { errors },
	} = useSignUpForm();

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3 flex flex-col gap-4">
				<TextInput
					label="Full name"
					leftIcon={<BiUser size={18} />}
					error={errors.fullName?.message}
					required
					{...register('fullName')}
				/>
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
					autoComplete="new-password"
					leftIcon={<HiOutlineLockClosed size={18} />}
					error={errors.password?.message}
					required
					{...register('password')}
				/>
				<PasswordInput
					label="Confirm password"
					autoComplete="new-password"
					leftIcon={<HiOutlineLockClosed size={18} />}
					error={errors.confirmPassword?.message}
					required
					{...register('confirmPassword')}
				/>
			</div>
			<Button type="submit" isLoading={isLoading} fullWidth>
				Sign Up
			</Button>
		</form>
	);
};
