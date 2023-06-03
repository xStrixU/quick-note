import { noteMemberPermissionLabels } from '@/lib/noteMembers';

import type { NoteMemberPermission } from '@prisma/client';

export const getManageMemberPermissionLabel = (
	permission: NoteMemberPermission
) => {
	const permissionLabel = noteMemberPermissionLabels[permission].toLowerCase();

	return `Can ${permissionLabel}`;
};
