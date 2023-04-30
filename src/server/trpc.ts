import { initTRPC, TRPCError } from '@trpc/server';

import { transformer } from '@/lib/transformer';

import type { Context } from './context';

const t = initTRPC.context<Context>().create({
	transformer,
});

const isAuthed = t.middleware(({ ctx, next }) => {
	if (!ctx.session) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: {
			session: ctx.session,
		},
	});
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcecure = t.procedure.use(isAuthed);
