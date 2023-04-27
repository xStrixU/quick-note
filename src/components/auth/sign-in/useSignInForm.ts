import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { signInFormSchema } from './SignInForm.schema';

import { useZodForm } from '@/hooks/useZodForm';

export const useSignInForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { setError, ...rest } = useZodForm(signInFormSchema, async data => {
		setIsLoading(true);

		const response = await signIn('credentials', {
			redirect: false,
			...data,
		});

		setIsLoading(false);

		if (response?.error) {
			const { error } = response;

			switch (error) {
				case 'CredentialsSignin': {
					const message = 'Invalid email or password';

					setError('email', { message });
					setError('password', { message });
					break;
				}
				default:
					if (error === 'OAuthAccountNotLinked') return;

					toast.error(error);
			}
		}
	});

	return { isLoading, setError, ...rest };
};
