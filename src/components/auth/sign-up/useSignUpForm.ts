import { signUpFormSchema } from './SignUpForm.schema';

import { useZodForm } from '@/hooks/useZodForm';
import { isTRPCClientError, trpc } from '@/lib/trpc';

interface useSignUpFormActions {
	onSuccess: () => void;
	onUnknownError: (message: string) => void;
}

export const useSignUpForm = ({
	onSuccess,
	onUnknownError,
}: useSignUpFormActions) => {
	const { mutate, isLoading } = trpc.users.create.useMutation();
	const { setError, ...rest } = useZodForm(signUpFormSchema, data => {
		mutate(data, {
			onSuccess,
			onError: err => {
				if (isTRPCClientError(err)) {
					const { data, message } = err;

					switch (data?.code) {
						case 'CONFLICT':
							setError('email', { message });
							break;
						default:
							onUnknownError(message);
					}
				}
			},
		});
	});

	return { isLoading, setError, ...rest };
};
