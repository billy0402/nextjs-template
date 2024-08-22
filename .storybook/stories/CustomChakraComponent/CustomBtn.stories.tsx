import type { Meta, StoryObj } from '@storybook/react';

import CustomBtn from '@/components/CustomBtn';
import { ColorOptions, ColorSchemeOptions } from '@/fixtures/theme/colors';

const meta = {
  title: 'Custom Chakra Component/CustomBtn',
  component: CustomBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      options: ColorSchemeOptions,
      control: { type: 'select' },
    },
    color: {
      options: ColorOptions,
      control: { type: 'select' },
    },
    backgroundColor: {
      options: ColorOptions,
      control: { type: 'select' },
    },
    width: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CustomBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    label: 'Button',
    colorScheme: 'primary',
  },
};

export const Accent: Story = {
  args: {
    label: 'Button',
    colorScheme: 'accent',
  },
};

export const Auxiliary: Story = {
  args: {
    label: 'Button',
    colorScheme: 'auxiliary',
  },
};
