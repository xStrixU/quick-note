import type { NoteMember } from './notes.schemas';
import type { NoteMember as PrismaNoteMember, User } from '@prisma/client';

export const mapPrismaNoteMemberToNoteMember = (
	noteMember: PrismaNoteMember & { user: User }
): NoteMember => ({
	member: noteMember.user,
	permission: noteMember.permission,
});
