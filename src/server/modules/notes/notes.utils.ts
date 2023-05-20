import type { User } from '../users/users.schemas';
import type { Note, NoteMember } from '@prisma/client';

export const isNoteOwner = (user: User, note: Note) => note.userId == user.id;

export const isNoteMember = (
	user: User,
	note: Note & { members: NoteMember[] }
) => !!note.members.find(member => member.userId === user.id);

export const isNoteOwnerOrMember = (
	user: User,
	note: Note & { members: NoteMember[] }
) => isNoteOwner(user, note) || isNoteMember(user, note);
