import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import Select from '@/components/Form/Field/src/Select';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<React.ComponentProps<typeof Select>, 'fieldConfig'>;

const PickSelect = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <Select {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/Select',
  component: PickSelect,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickSelect>;

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
  },
};

export const NotRequired: Story = {
  args: {
    fieldConfig: {
      name: 'gender',
      type: 'select',
      label: '性別',
      options: ['male', 'female', 'others'],
      displayOptions: ['男', '女', '其他'],
    },
  },
};
