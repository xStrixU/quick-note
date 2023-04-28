import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineLockClosed } from 'react-icons/hi';

import { TextInput } from './TextInput';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: TextInput,
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
	args: {
		label: 'Default',
	},
};

export const WithoutLabel: Story = {
	args: {
		placeholder: 'Without label',
	},
};
export const Required: Story = {
	args: {
		label: 'Required',
		required: true,
	},
};

export const WithError: Story = {
	args: {
		label: 'With error',
		error: 'Lorem ipsum',
	},
};

export const WithLeftIcon: Story = {
	args: {
		label: 'With left icon',
		leftIcon: <HiOutlineLockClosed size={18} />,
	},
};

export const WithLeftSection: Story = {
	args: {
		label: 'With left section',
		leftSection: <button className="mr-2 h-full bg-gray-200 px-2">LEFT</button>,
	},
};

export const WithRightIcon: Story = {
	args: {
		label: 'With right icon',
		rightIcon: <BiMicrophone size={18} />,
	},
};

export const WithRightSection: Story = {
	args: {
		label: 'With right section',
		rightSection: (
			<button className="ml-2 h-full bg-gray-200 px-2">RIGHT</button>
		),
	},
};
