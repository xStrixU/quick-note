'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Button } from '../ui/Button/Button';

import type { ClientSafeProvider } from 'next-auth/react';

type ContinueWithProps = Readonly<{
	providers: ClientSafeProvider[];
}>;

export const ContinueWith = ({ providers }: ContinueWithProps) => {
	const searchParams = useSearchParams();

	const error = searchParams.get('error');
	const filteredProviders = providers.filter(({ id }) => id !== 'credentials');

	useEffect(() => {
		if (error === 'OAuthAccountNotLinked') {
			toast.error('This account is not linked');
		}
	}, [error]);

	if (!filteredProviders.length) {
		return null;
	}

	return (
		<div className="mt-4 flex w-full flex-col items-center text-foreground">
			<p className="mb-4 flex items-center font-medium before:mr-4 before:h-0.5 before:w-8 before:bg-foreground after:ml-4 after:h-0.5 after:w-8 after:bg-foreground">
				or continue with
			</p>
			<div className="flex w-full flex-col gap-2 min-[420px]:flex-row min-[420px]:justify-center min-[420px]:gap-4">
				{filteredProviders.map(({ id, name }) => (
					<Button key={id} variant="border" onClick={() => signIn(id)}>
						<Image
							src={`/icons/${id}.svg`}
							alt={`${id} logo`}
							width={24}
							height={24}
							className="mr-2"
						/>
						{name}
					</Button>
				))}
			</div>
		</div>
	);
};
