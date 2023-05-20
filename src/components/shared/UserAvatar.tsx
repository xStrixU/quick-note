import Image from 'next/image';

import { getInitials } from '@/lib/utils';

type UserAvatarProps = Readonly<{
	user: { name: string | null; image: string | null };
}>;

export const UserAvatar = ({ user }: UserAvatarProps) => (
	<div className="relative flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full bg-neutral-300 text-sm font-medium text-neutral-700">
		{user.image ? (
			<Image
				src={user.image}
				alt={`${user.name} avatar`}
				fill
				className="rounded-full"
			/>
		) : (
			getInitials(user.name ?? '').slice(0, 2)
		)}
	</div>
);
