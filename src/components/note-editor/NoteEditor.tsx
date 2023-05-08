import { NoteEditorHeader } from './NoteEditorHeader/NoteEditorHeader';
import { NoteTinyMCEEditor } from './NoteTinyMCEEditor';
import { NoteTitleEditor } from './NoteTitleEditor';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteEditorProps = Readonly<{
	note: NoteDetails;
}>;

export const NoteEditor = ({ note }: NoteEditorProps) => (
	<div className="flex h-full flex-col">
		<NoteEditorHeader note={note} />
		<NoteTitleEditor note={note} />
		<div className="grow">
			<NoteTinyMCEEditor note={note} />
		</div>
	</div>
);
