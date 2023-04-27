import {
	createTRPCReact,
	httpBatchLink,
	loggerLink,
	TRPCClientError,
} from '@trpc/react-query';

import { transformer } from './transformer';

import type { AppRouter } from '@/server/app.router';

export const isTRPCClientError = (
	err: unknown
): err is TRPCClientError<AppRouter> => err instanceof TRPCClientError;

const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return '';
	}

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	if (process.env.RENDER_EXTERNAL_URL) {
		return process.env.RENDER_EXTERNAL_URL;
	}

	return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
	links: [
		loggerLink({
			enabled: options =>
				(process.env.NODE_ENV === 'development' &&
					typeof window !== 'undefined') ||
				(options.direction === 'down' && options.result instanceof Error),
		}),
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
		}),
	],
	transformer,
});
