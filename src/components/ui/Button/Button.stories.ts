import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Fill: Story = {
	args: {
		variant: 'fill',
	},
};

export const Border: Story = {
	args: {
		variant: 'border',
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
};
