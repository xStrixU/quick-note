import { InviteProvider } from './InviteProvider';
import { ShareNoteDropdownMenu } from './ShareNoteDropdownMenu';

import { Button } from '@/components/ui/Button/Button';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type ShareNoteButtonProps = Readonly<{
	note: NoteDetails;
}>;

export const ShareNoteButton = ({ note }: ShareNoteButtonProps) => (
	<InviteProvider>
		<ShareNoteDropdownMenu note={note}>
			<Button size="small">Share</Button>
		</ShareNoteDropdownMenu>
	</InviteProvider>
);
