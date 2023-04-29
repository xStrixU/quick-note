import { MdAddHome } from 'react-icons/md';

import { Button } from '../Button/Button';
import { DropdownMenu as DropdownMenuComponent } from './DropdownMenu';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: DropdownMenuComponent,
} satisfies Meta<typeof DropdownMenuComponent>;

type Story = StoryObj<typeof DropdownMenuComponent>;

export const DropdownMenu: Story = {
	render: () => (
		<div className="flex justify-center">
			<DropdownMenuComponent fullWidth>
				<DropdownMenuComponent.Button>
					<Button>Open</Button>
				</DropdownMenuComponent.Button>
				<DropdownMenuComponent.Items>
					<DropdownMenuComponent.Item onClick={() => console.log('Foo click')}>
						Foo
					</DropdownMenuComponent.Item>
					<DropdownMenuComponent.Item
						icon={<MdAddHome />}
						onClick={() => console.log('Bar click')}
					>
						Bar
					</DropdownMenuComponent.Item>
					<DropdownMenuComponent.Item onClick={() => console.log('Baz click')}>
						Baz
					</DropdownMenuComponent.Item>
				</DropdownMenuComponent.Items>
			</DropdownMenuComponent>
		</div>
	),
};
