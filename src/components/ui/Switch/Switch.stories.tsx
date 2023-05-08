/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';

import { Switch as SwitchComponent } from './Switch';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: SwitchComponent,
} satisfies Meta<typeof SwitchComponent>;

type Story = StoryObj<typeof SwitchComponent>;

export const Switch: Story = {
	render: () => {
		const [isChecked, setIsChecked] = useState(false);

		return (
			<SwitchComponent
				checked={isChecked}
				onChange={() => setIsChecked(isChecked => !isChecked)}
			/>
		);
	},
};
