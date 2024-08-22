import type { Meta, StoryObj } from '@storybook/react';

import DayNight from '@/components/DayNight';

const meta = {
  title: 'Custom/DayNight',
  component: DayNight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DayNight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
