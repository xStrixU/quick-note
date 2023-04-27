import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import { serverEnv } from '@/env/server.env';
import { prisma } from '@/server/lib/prisma/prisma.instance';
import { userSchema } from '@/server/modules/users/users.schemas';
import { findUserBy } from '@/server/modules/users/users.service';

import type { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/sign-in',
		newUser: '/sign-up',
	},
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			clientId: serverEnv.GOOGLE_CLIENT_ID,
			clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
		}),
		AppleProvider({
			clientId: serverEnv.APPLE_CLIENT_ID,
			clientSecret: serverEnv.APPLE_CLIENT_SECRET,
		}),
		FacebookProvider({
			clientId: serverEnv.FACEBOOK_CLIENT_ID,
			clientSecret: serverEnv.FACEBOOK_CLIENT_SECRET,
		}),
		CredentialsProvider({
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async credentials => {
				if (!credentials?.email || !credentials.password) {
					throw new Error('Invalid request body');
				}

				const user = await findUserBy({ email: credentials.email });

				if (!user?.password) {
					return null;
				}

				const isPasswordValid = await compare(
					credentials.password,
					user.password
				);

				if (!isPasswordValid) {
					return null;
				}

				return userSchema.parse(user);
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
