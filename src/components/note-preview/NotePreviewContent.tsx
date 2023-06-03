'use client';

import { createNotePreviewIFrameSrcDoc } from './NotePreview.utils';

import { useThemeContext } from '@/providers/ThemeProvider';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NotePreviewContentProps = Readonly<{
	note: NoteDetails;
}>;

export const NotePreviewContent = ({ note }: NotePreviewContentProps) => {
	const { theme } = useThemeContext();

	return (
		<iframe
			srcDoc={createNotePreviewIFrameSrcDoc(note, theme === 'dark')}
			className="h-full w-full overflow-auto"
		/>
	);
};
