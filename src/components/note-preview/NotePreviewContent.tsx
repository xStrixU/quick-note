import { createNotePreviewIFrameSrcDoc } from '@/lib/notes';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NotePreviewContentProps = Readonly<{
	note: NoteDetails;
}>;

export const NotePreviewContent = ({ note }: NotePreviewContentProps) => (
	<iframe
		srcDoc={createNotePreviewIFrameSrcDoc(note)}
		className="h-full w-full overflow-auto"
	/>
);
