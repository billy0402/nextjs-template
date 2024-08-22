import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import ArrayFields from '@/components/Form/Field/src/ArrayFields';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<
  React.ComponentProps<typeof ArrayFields>,
  'fieldConfig'
>;

const PickArrayFields = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <ArrayFields {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/ArrayFields',
  component: PickArrayFields,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickArrayFields>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'dogs',
      type: 'array',
      label: '狗狗列表',
      required: true,
      fieldConfigs: [
        {
          name: 'title',
          type: 'text',
          label: '標題',
          required: true,
          defaultValue: '吉娃娃',
        },
        {
          name: 'description',
          type: 'textarea',
          label: '描述',
          required: true,
        },
      ],
    },
  },
};
