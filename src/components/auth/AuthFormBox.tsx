import { getProviders } from 'next-auth/react';

import { ContinueWith } from './ContinueWith';

import type { ReactNode } from 'react';

type AuthFormBoxProps = Readonly<{
	title: string;
	bottomSection: ReactNode;
	children: ReactNode;
}>;

export const AuthFormBox = async ({
	title,
	bottomSection,
	children,
}: AuthFormBoxProps) => {
	const providers = await getProviders();

	return (
		<div className="flex h-full w-full flex-col justify-center bg-white p-8 dark:border-neutral-900 dark:bg-neutral-800 sm:h-fit sm:max-w-lg sm:rounded-2xl sm:border sm:border-gray-300">
			<h1 className="mb-7 text-3xl font-bold text-foreground sm:text-center">
				{title}
			</h1>
			{children}
			<ContinueWith providers={Object.values(providers || {})} />
			<p className="mt-6 text-center text-[0.938rem] text-foreground">
				{bottomSection}
			</p>
		</div>
	);
};
