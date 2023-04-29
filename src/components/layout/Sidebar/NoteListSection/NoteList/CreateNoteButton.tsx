import { MdAdd } from 'react-icons/md';

export const CreateNoteButton = () => (
	<button
		type="button"
		className="flex w-full items-center gap-2 rounded p-1 pl-3.5 hover:bg-gray-200 dark:hover:bg-neutral-700"
	>
		<MdAdd size={18} className="shrink-0" />
		<p className="truncate underline underline-offset-2">Create a note</p>
	</button>
);
