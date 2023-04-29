import type { User } from '@/server/modules/users/users.schemas';

import 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: User;
	}
}
