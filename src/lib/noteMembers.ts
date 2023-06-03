import type { NoteMemberPermission } from '@prisma/client';

export const noteMemberPermissionLabels: Record<NoteMemberPermission, string> =
	{
		EDIT: 'Edit',
		VIEW: 'View',
	};
