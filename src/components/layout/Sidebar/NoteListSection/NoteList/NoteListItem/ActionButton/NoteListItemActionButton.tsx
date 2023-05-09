import type { MouseEventHandler, ReactNode } from 'react';

type NoteListItemActionButtonProps = Readonly<{
	label: string;
	icon: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export const NoteListItemActionButton = ({
	label,
	icon,
	...props
}: NoteListItemActionButtonProps) => (
	<button
		type="button"
		title={label}
		aria-label={label}
		className="flex h-6 w-6 shrink-0 items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-neutral-600"
		{...props}
	>
		{icon}
	</button>
);
