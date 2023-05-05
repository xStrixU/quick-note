import { NoteEditorHeader } from './NoteEditorHeader/NoteEditorHeader';
import { NoteTinyMCEEditor } from './NoteTinyMCEEditor';
import { TitleEditor } from './TitleEditor';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteEditorProps = Readonly<{
	note: NoteDetails;
}>;

export const NoteEditor = ({ note }: NoteEditorProps) => (
	<div className="flex h-full flex-col">
		<NoteEditorHeader note={note} />
		<TitleEditor note={note} />
		<div className="grow">
			<NoteTinyMCEEditor note={note} />
		</div>
	</div>
);
