import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

import type { OptionalCatchAllParams } from '@/types/next';

type EditNoteLayoutProps = Readonly<{
	params: OptionalCatchAllParams<'slug'>;
	children: ReactNode;
}>;

const EditNoteLayout = ({
	params: { slug },
	children,
}: EditNoteLayoutProps) => {
	const noteId = slug?.[0];

	return (
		<main
			className={twMerge('relative grow', !noteId && 'hidden desktop:block')}
		>
			{children}
		</main>
	);
};

export default EditNoteLayout;
