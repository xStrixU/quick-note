'use client';

import { useReducer, useState } from 'react';

import { createSafeContext } from '@/lib/createSafeContext';

import type { Dispatch, ReactNode } from 'react';

import type { SimpleUser } from '@/server/modules/users/users.schemas';

interface InviteContextValue {
	isInviteEnable: boolean;
	selectedUsers: SimpleUser[];
	enableInvite: () => void;
	disableInvite: () => void;
	dispatchSelectedUsers: Dispatch<SelectedUserAction>;
}

type SelectedUserAction =
	| { type: 'add'; user: SimpleUser }
	| { type: 'remove'; userId: string }
	| { type: 'clear' };

const selectedUsersReducer = (
	state: SimpleUser[],
	action: SelectedUserAction
) => {
	switch (action.type) {
		case 'add':
			return [action.user, ...state];
		case 'remove': {
			const filteredUsers = state.filter(user => user.id !== action.userId);

			return filteredUsers;
		}
		case 'clear':
			return [];
	}
};

const [useInviteContext, InviteContextProvider] =
	createSafeContext<InviteContextValue>();

const InviteProvider = ({ children }: { readonly children: ReactNode }) => {
	const [isInviteEnable, setIsInviteEnable] = useState(false);
	const [selectedUsers, dispatchSelectedUsers] = useReducer(
		selectedUsersReducer,
		[] as SimpleUser[]
	);

	const enableInvite = () => setIsInviteEnable(true);
	const disableInvite = () => setIsInviteEnable(false);

	return (
		<InviteContextProvider
			value={{
				isInviteEnable,
				selectedUsers,
				enableInvite,
				disableInvite,
				dispatchSelectedUsers,
			}}
		>
			{children}
		</InviteContextProvider>
	);
};

export { InviteProvider, useInviteContext };
