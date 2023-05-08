'use client';

import { Fragment, useState } from 'react';
import { IoEarth } from 'react-icons/io5';

import { NoteLinkPreview } from './NoteLinkPreview';

import { Button } from '@/components/ui/Button/Button';
import { DropdownMenu } from '@/components/ui/DropdownMenu/DropdownMenu';
import { Switch } from '@/components/ui/Switch/Switch';

import { useUpdateNoteById } from '@/hooks/notes/useUpdateNoteById';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type ShareNoteButtonProps = Readonly<{
	note: NoteDetails;
}>;

export const ShareNoteButton = ({ note }: ShareNoteButtonProps) => {
	const [isChecked, setIsChecked] = useState(note.isShared);
	const updateNoteById = useUpdateNoteById();

	const handleSwitchChange = () => {
		setIsChecked(!isChecked);
		void updateNoteById({ id: note.id, data: { isShared: !isChecked } });
	};

	return (
		<DropdownMenu>
			<DropdownMenu.Button as={Fragment}>
				<Button size="small">Share</Button>
			</DropdownMenu.Button>
			<DropdownMenu.Items direction="left">
				<label className="flex cursor-pointer select-none items-center gap-1.5 px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800">
					<IoEarth size={18} />
					<p className="mr-auto">Share to web</p>
					<Switch checked={isChecked} onChange={handleSwitchChange} />
				</label>
				{isChecked && <NoteLinkPreview note={note} />}
			</DropdownMenu.Items>
		</DropdownMenu>
	);
};
