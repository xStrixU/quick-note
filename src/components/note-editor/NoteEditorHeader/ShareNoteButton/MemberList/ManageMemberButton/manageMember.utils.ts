import { noteMemberPermissionLabels } from '@/lib/noteMember';

import type { NoteMemberPermission } from '@prisma/client';

export const getManageMemberPermissionLabel = (
	permission: NoteMemberPermission
) => {
	const permissionLabel = noteMemberPermissionLabels[permission].toLowerCase();

	return `Can ${permissionLabel}`;
};
