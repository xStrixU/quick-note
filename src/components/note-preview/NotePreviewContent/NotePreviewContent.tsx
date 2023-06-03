'use client';

import { useEffect, useRef } from 'react';

import { createNotePreviewIFrameSrcDoc } from './NotePreviewContent.utils';

import { createBindIframeMouseEventHandlers } from '@/lib/createBindIframeMouseEventHandlers';
import { useThemeContext } from '@/providers/ThemeProvider';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NotePreviewContentProps = Readonly<{
	note: NoteDetails;
}>;

export const NotePreviewContent = ({ note }: NotePreviewContentProps) => {
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const { theme } = useThemeContext();

	const { addMouseEventHandlers, removeMouseEventHandlers } =
		createBindIframeMouseEventHandlers(iframeRef, ['mousemove', 'mouseup']);

	useEffect(() => {
		addMouseEventHandlers();

		return () => removeMouseEventHandlers();
	}, [addMouseEventHandlers, removeMouseEventHandlers]);

	return (
		<iframe
			ref={iframeRef}
			srcDoc={createNotePreviewIFrameSrcDoc(note, theme === 'dark')}
			className="h-full w-full overflow-auto"
		/>
	);
};
