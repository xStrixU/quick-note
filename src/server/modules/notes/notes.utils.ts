import type { User } from '../users/users.schemas';
import type { Note, NoteMember, NoteMemberPermission } from '@prisma/client';

export const isNoteOwner = (user: User, note: Note) => note.userId == user.id;

export const isNoteMember = (
	user: User,
	note: Note & { members: NoteMember[] },
	permission?: NoteMemberPermission
) =>
	!!note.members.find(
		member =>
			member.userId === user.id &&
			(!permission || member.permission === permission)
	);

export const isNoteOwnerOrMember = (
	user: User,
	note: Note & { members: NoteMember[] },
	permission?: NoteMemberPermission
) => isNoteOwner(user, note) || isNoteMember(user, note, permission);
