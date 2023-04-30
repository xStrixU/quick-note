import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { signInFormSchema } from './SignInForm.schema';

import { useZodForm } from '@/hooks/useZodForm';

interface UseSignInFormActions {
	onSuccess: () => void;
	onUnknownError: (error: string) => void;
}

export const useSignInForm = ({
	onSuccess,
	onUnknownError,
}: UseSignInFormActions) => {
	const [isLoading, setIsLoading] = useState(false);
	const { setError, ...rest } = useZodForm(signInFormSchema, async data => {
		setIsLoading(true);

		const response = await signIn('credentials', {
			redirect: false,
			...data,
		});

		setIsLoading(false);

		if (!response?.error) {
			onSuccess();
		} else {
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

					onUnknownError(error);
			}
		}
	});

	return { isLoading, setError, ...rest };
};
