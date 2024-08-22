import type { Meta, StoryObj } from '@storybook/react';

import Select from '@/components/Form/FieldDisplay/src/Options';

const meta = {
  title: 'FieldDisplay/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'gender',
      type: 'select',
      label: '性別',
      required: true,
      options: ['male', 'female', 'others'],
      displayOptions: ['男', '女', '其他'],
    },
    currentValue: 'others',
  },
};

export const Radio: Story = {
  args: {
    fieldConfig: {
      name: 'gender',
      type: 'radio',
      label: '性別',
      required: true,
      options: ['male', 'female', 'others'],
      displayOptions: ['男', '女', '其他'],
    },
    currentValue: 'others',
  },
};
