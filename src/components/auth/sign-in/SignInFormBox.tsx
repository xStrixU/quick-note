import { AuthFormBox } from '../AuthFormBox';
import { SignInForm } from './SignInForm';

import { Link } from '@/components/ui/Link/Link';

export const SignInFormBox = () => (
	<>
		{/* @ts-expect-error Async Server Component */}
		<AuthFormBox
			title="Login to your account"
			bottomSection={
				<>
					{"Don't"} have an account? <Link href="/sign-up">Sign Up</Link>
				</>
			}
		>
			<SignInForm />
		</AuthFormBox>
	</>
);
