import { MdExpandLess, MdExpandMore } from 'react-icons/md';

type NoteListSectionHeaderProps = Readonly<{
	title: string;
	isExpanded: boolean;
	toggleExpand: () => void;
}>;

export const NoteListSectionHeader = ({
	title,
	isExpanded,
	toggleExpand,
}: NoteListSectionHeaderProps) => (
	<button
		type="button"
		aria-label={`${isExpanded ? 'Hide' : 'Show'} notes section`}
		onClick={toggleExpand}
		className="flex w-full items-center rounded px-1.5 py-0.5 hover:bg-gray-200 dark:hover:bg-neutral-700"
	>
		{isExpanded ? (
			<MdExpandLess size={18} className="shrink-0" />
		) : (
			<MdExpandMore size={18} className="shrink-0" />
		)}
		<h2 className="ml-1 truncate font-bold">{title}</h2>
	</button>
);
