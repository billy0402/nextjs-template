import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import Textarea from '@/components/Form/Field/src/Textarea';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<
  React.ComponentProps<typeof Textarea>,
  'fieldConfig'
>;

const PickTextarea = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <Textarea {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/Textarea',
  component: PickTextarea,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'introduction',
      type: 'textarea',
      label: '簡介',
      required: true,
    },
  },
};

export const NotRequired: Story = {
  args: {
    fieldConfig: {
      name: 'introduction',
      type: 'textarea',
      label: '簡介',
    },
  },
};
