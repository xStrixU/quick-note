import { MemberListItem } from './MemberListItem';

import { useGetNoteMembersById } from '@/hooks/notes/useGetNoteMembersById';

import type { Note } from '@/server/modules/notes/notes.schemas';

type MemberListProps = Readonly<{
	note: Note;
}>;

export const MemberList = ({ note }: MemberListProps) => {
	const { data, isLoading } = useGetNoteMembersById(note.id);

	if (isLoading) {
		return <p className="text-sm">Loading...</p>;
	}

	return (
		<div>
			<p className="text-sm font-medium">Members</p>
			<ul className="app-scrollbar max-h-40 overflow-auto">
				{data?.length ? (
					data.map(member => <MemberListItem key={member.id} member={member} />)
				) : (
					<p className="text-sm">There are no members</p>
				)}
			</ul>
		</div>
	);
};
