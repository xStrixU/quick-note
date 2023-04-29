import { CreateNoteButton } from './CreateNoteButton';
import { NoteListItem } from './NoteListItem/NoteListItem';

type NotesListProps = Readonly<{
	isPrivate: boolean;
}>;

export const NotesList = ({ isPrivate }: NotesListProps) => (
	<ul>
		{isPrivate && (
			<li>
				<CreateNoteButton />
			</li>
		)}
		<NoteListItem title="Lorem ipsum" icon={null} />
		<NoteListItem title="Lorem ipsum" icon={null} />
		<NoteListItem title="Lorem ipsum" icon={null} />
	</ul>
);
