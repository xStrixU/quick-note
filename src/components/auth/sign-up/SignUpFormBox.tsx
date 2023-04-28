import { AuthFormBox } from '../AuthFormBox';
import { SignUpForm } from './SignUpForm';

import { Link } from '@/components/ui/Link/Link';

export const SignUpFormBox = () => (
	<>
		{/* @ts-expect-error Async Server Component */}
		<AuthFormBox
			title="Create an account"
			bottomSection={
				<>
					Already have an account? <Link href="/sign-in">Sign In</Link>
				</>
			}
		>
			<SignUpForm />
		</AuthFormBox>
	</>
);
