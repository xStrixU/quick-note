import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

import type { OptionalCatchAllParams } from '@/types/next';

type EditNotePageProps = Readonly<{
	params: OptionalCatchAllParams<'slug'>;
}>;

const EditNotePage = ({ params: { slug } }: EditNotePageProps) => {
	const noteId = slug?.[0] ?? null;

	if (!noteId) {
		return (
			<div className="flex h-full items-center justify-center text-xl text-foreground">
				You have not selected any note!
			</div>
		);
	}

	return (
		<>
			<Link
				href="/"
				aria-label="Go back"
				className="absolute left-4 top-4 text-foreground desktop:hidden"
			>
				<IoIosArrowBack size={26} />
			</Link>
			<div className="flex h-full items-center justify-center text-foreground">
				Note ID: {noteId}
			</div>
		</>
	);
};

export default EditNotePage;
