import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import BooleanField from '@/components/Form/Field/src/BooleanField';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<
  React.ComponentProps<typeof BooleanField>,
  'fieldConfig'
>;

const PickBooleanField = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <BooleanField {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/BooleanField',
  component: PickBooleanField,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickBooleanField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'isEnabled',
      type: 'boolean',
      label: '是否啟用',
      required: true,
    },
  },
};

export const NotRequired: Story = {
  args: {
    fieldConfig: {
      name: 'isEnabled',
      type: 'boolean',
      label: '是否啟用',
    },
  },
};
