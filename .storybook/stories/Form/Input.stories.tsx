import type { Meta, StoryObj } from '@storybook/react';

import { useFormContext } from 'react-hook-form';

import Input from '@/components/Form/Field/src/Input';
import withRHF from '@/storybook/decorators/with-rhf';

type PickFieldConfig = Pick<React.ComponentProps<typeof Input>, 'fieldConfig'>;

const PickInput = ({ fieldConfig }: PickFieldConfig) => {
  const methods = useFormContext();
  return <Input {...methods} fieldConfig={fieldConfig} />;
};

const meta = {
  title: 'Form/Input',
  component: PickInput,
  decorators: [withRHF],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PickInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldConfig: {
      name: 'name',
      type: 'text',
      label: '名稱',
      required: true,
      defaultValue: 'John Doe',
    },
  },
};

export const NotRequired: Story = {
  args: {
    fieldConfig: {
      name: 'name',
      type: 'text',
      label: '名稱',
    },
  },
};

export const Password: Story = {
  args: {
    fieldConfig: {
      name: 'password',
      type: 'password',
      label: '密碼',
      required: true,
      defaultValue: 'password',
    },
  },
};

export const Number: Story = {
  args: {
    fieldConfig: {
      name: 'price',
      type: 'number',
      label: '價格',
      required: true,
      defaultValue: 100,
    },
  },
};

export const Email: Story = {
  args: {
    fieldConfig: {
      name: 'email',
      type: 'email',
      label: '電子郵件',
      required: true,
      defaultValue: 'test@gmail.com',
    },
  },
};

export const Telephone: Story = {
  args: {
    fieldConfig: {
      name: 'phone',
      type: 'tel',
      label: '電話號碼',
      required: true,
      defaultValue: '0912345678',
    },
  },
};

export const Date: Story = {
  args: {
    fieldConfig: {
      name: 'birthday',
      type: 'date',
      label: '生日',
      required: true,
      defaultValue: '2021-01-01',
    },
  },
};

export const Time: Story = {
  args: {
    fieldConfig: {
      name: 'startTime',
      type: 'time',
      label: '開始時間',
      required: true,
      defaultValue: '00:00',
    },
  },
};

export const DateTime: Story = {
  args: {
    fieldConfig: {
      name: 'createdAt',
      type: 'datetime-local',
      label: '建立時間',
      required: true,
      defaultValue: '2021-01-01T00:00',
    },
  },
};

export const Hidden: Story = {
  args: {
    fieldConfig: {
      name: 'id',
      type: 'hidden',
      label: 'ID',
    },
  },
};
