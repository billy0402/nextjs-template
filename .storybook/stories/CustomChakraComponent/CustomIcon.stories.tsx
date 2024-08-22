import type { Meta, StoryObj } from '@storybook/react';

import CustomIcon from '@/components/CustomIcon';

const meta = {
  title: 'Custom Chakra Component/CustomIcon',
  component: CustomIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    fontSize: '3xl',
  },
} satisfies Meta<typeof CustomIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'darkMode',
  },
};
