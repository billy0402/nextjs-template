import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import Radio from '@/components/Form/Field/src/Radio';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<React.ComponentProps<typeof Radio>, 'fieldConfig'>;

const PickRadio = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <Radio {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/Radio',
  component: PickRadio,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'gender',
      type: 'radio',
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
      type: 'radio',
      label: '性別',
      options: ['male', 'female', 'others'],
      displayOptions: ['男', '女', '其他'],
    },
  },
};
