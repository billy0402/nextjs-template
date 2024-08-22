import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import Checkbox from '@/components/Form/Field/src/Checkbox';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<
  React.ComponentProps<typeof Checkbox>,
  'fieldConfig'
>;

const PickCheckbox = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <Checkbox {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/Checkbox',
  component: PickCheckbox,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'preferredColors',
      type: 'checkbox',
      label: '喜歡的顏色',
      required: true,
      options: ['red', 'blue', 'green'],
      displayOptions: ['紅色', '藍色', '綠色'],
    },
  },
};

export const NotRequired: Story = {
  args: {
    fieldConfig: {
      name: 'preferredColors',
      type: 'checkbox',
      label: '喜歡的顏色',
      options: ['red', 'blue', 'green'],
      displayOptions: ['紅色', '藍色', '綠色'],
    },
  },
};
