type NoteListAlertProps = Readonly<{
	message: string;
}>;

export const NoteListAlert = ({ message }: NoteListAlertProps) => (
	<p className="ml-4 truncate text-sm">{message}</p>
);
