import { IoEarth } from 'react-icons/io5';

import { NoteLinkPreview } from './NoteLinkPreview';

import { Switch } from '@/components/ui/Switch/Switch';

import { useUpdateNoteById } from '@/hooks/notes/useUpdateNoteById';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type ShareNoteToWebProps = Readonly<{
	isChecked: boolean;
	note: NoteDetails;
	toggle: () => void;
}>;

export const ShareNoteToWeb = ({
	isChecked,
	note,
	toggle,
}: ShareNoteToWebProps) => {
	const updateNoteById = useUpdateNoteById();

	const handleSwitchChange = () => {
		toggle();
		updateNoteById({ id: note.id, data: { isShared: !isChecked } });
	};

	return (
		<div>
			<label className="flex cursor-pointer select-none items-center gap-1.5 px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800">
				<IoEarth size={18} />
				<p className="mr-auto">Share to web</p>
				<Switch checked={isChecked} onChange={handleSwitchChange} />
			</label>
			{isChecked && <NoteLinkPreview note={note} />}
		</div>
	);
};
