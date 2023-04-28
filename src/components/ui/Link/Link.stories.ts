import { Link as LinkComponent } from './Link';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: LinkComponent,
} as Meta<typeof LinkComponent>;

type Story = StoryObj<typeof LinkComponent>;

export const Link: Story = {
	args: {
		href: '/',
		children: 'Lorem Ipsum',
	},
};
