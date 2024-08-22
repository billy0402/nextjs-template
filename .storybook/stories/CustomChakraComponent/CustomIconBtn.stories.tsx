import type { Meta, StoryObj } from '@storybook/react';

import CustomIconBtn from '@/components/CustomIconBtn';
import { ColorOptions, ColorSchemeOptions } from '@/fixtures/theme/colors';

const meta = {
  title: 'Custom Chakra Component/CustomIconBtn',
  component: CustomIconBtn,
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
    tooltipPosition: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
  },
  args: {
    fontSize: '2xl',
  },
} satisfies Meta<typeof CustomIconBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Button',
    icon: 'darkMode',
  },
};

export const Primary: Story = {
  args: {
    'aria-label': 'Button',
    icon: 'darkMode',
    colorScheme: 'primary',
  },
};

export const Accent: Story = {
  args: {
    'aria-label': 'Button',
    icon: 'darkMode',
    colorScheme: 'accent',
  },
};

export const Auxiliary: Story = {
  args: {
    'aria-label': 'Button',
    icon: 'darkMode',
    colorScheme: 'auxiliary',
  },
};
