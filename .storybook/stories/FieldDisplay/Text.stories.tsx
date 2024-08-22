import type { Meta, StoryObj } from '@storybook/react';

import Text from '@/components/Form/FieldDisplay/src/Text';

const meta = {
  title: 'FieldDisplay/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'name',
      type: 'text',
      label: '名稱',
      required: true,
    },
    currentValue: 'John Doe',
  },
};

export const Date: Story = {
  args: {
    fieldConfig: {
      name: 'birthday',
      type: 'date',
      label: '生日',
      required: true,
    },
    currentValue: '2021-01-01',
  },
};

export const BooleanField: Story = {
  args: {
    fieldConfig: {
      name: 'isEnabled',
      type: 'boolean',
      label: '是否啟用',
      required: true,
    },
    currentValue: true,
  },
};
