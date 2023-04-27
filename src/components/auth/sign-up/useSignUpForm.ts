import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { signUpFormSchema } from './SignUpForm.schema';

import { useZodForm } from '@/hooks/useZodForm';
import { isTRPCClientError, trpc } from '@/lib/trpc';

export const useSignUpForm = () => {
	const { mutate, isLoading } = trpc.users.create.useMutation();
	const router = useRouter();
	const { setError, ...rest } = useZodForm(signUpFormSchema, data => {
		mutate(data, {
			onSuccess: () => {
				toast.success('Signed up successfully');
				router.push('/sign-in');
			},
			onError: err => {
				if (isTRPCClientError(err)) {
					const { data, message } = err;

					switch (data?.code) {
						case 'CONFLICT':
							setError('email', { message });
							break;
						default:
							toast.error(message);
					}
				}
			},
		});
	});

	return { isLoading, setError, ...rest };
};
