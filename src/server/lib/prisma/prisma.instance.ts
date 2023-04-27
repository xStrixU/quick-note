import { PrismaClient } from '@prisma/client';

import { serverEnv } from '@/env/server.env';

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (serverEnv.NODE_ENV !== 'production') {
	globalForPrisma.prisma = prisma;
}
