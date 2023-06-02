import { useState } from 'react';
import { toast } from 'react-hot-toast';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteLinkPreviewProps = Readonly<{
	note: NoteDetails;
}>;

export const NoteLinkPreview = ({ note }: NoteLinkPreviewProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const value = `${window.location.origin}/preview/${note.id}`;

	const handleCopyLinkClick = async () => {
		if (isCopied) return;

		await toast.promise(navigator.clipboard.writeText(value), {
			loading: 'Copying...',
			success: 'Copied link to clipboard',
			error: 'Failed to copy link',
		});
		setIsCopied(true);
	};

	return (
		<div className="mt-1 flex rounded border border-gray-300 text-sm dark:border-gray-500">
			<input
				type="text"
				disabled
				className="min-w-0 grow bg-gray-200 p-1 dark:bg-neutral-800"
				value={value}
			/>
			<button
				className="whitespace-nowrap p-1"
				onClick={handleCopyLinkClick}
				onMouseLeave={() => setIsCopied(false)}
			>
				{isCopied ? 'Copied!' : 'Copy link'}
			</button>
		</div>
	);
};
