import { useInviteContext } from '../InviteProvider';
import { SelectedUser } from './SelectedUser';

type ShareNoteInviteInputProps = Readonly<{
	value: string;
	setValue: (value: string) => void;
}>;

export const ShareNoteInviteInput = ({
	value,
	setValue,
}: ShareNoteInviteInputProps) => {
	const { selectedUsers, enableInvite } = useInviteContext();

	return (
		<div className="flex min-h-[2.25rem] w-full flex-wrap rounded border border-gray-300 text-sm transition-colors focus-within:border-primary dark:border-gray-500">
			{!!selectedUsers.length && (
				<div className="flex flex-wrap items-center gap-1 p-1 pr-0">
					{selectedUsers.map(user => (
						<SelectedUser key={user.id} user={user} />
					))}
				</div>
			)}
			<input
				type="text"
				placeholder="Enter name or email"
				value={value}
				onFocus={enableInvite}
				onChange={({ target }) => setValue(target.value)}
				className="grow bg-transparent px-1.5 text-foreground outline-none dark:placeholder:text-gray-400"
			/>
		</div>
	);
};
