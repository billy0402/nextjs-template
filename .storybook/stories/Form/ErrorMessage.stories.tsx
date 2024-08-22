import type { Meta, StoryObj } from '@storybook/react';

import { Container, FormControl, FormLabel, Input } from '@chakra-ui/react';

import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';

const meta = {
  title: 'Form/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    name: 'name',
    errors: {
      name: { type: 'required', message: 'This field is required' },
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormTemplate: Story = {
  render: (args) => {
    return (
      <Container maxWidth='100%' padding='sm'>
        <FormControl isInvalid>
          <FormLabel htmlFor='name'>名稱</FormLabel>
          <Input name={args.name} type='text' />
          <ErrorMessage {...args} />
        </FormControl>
      </Container>
    );
  },
};

export const Default: Story = {
  ...FormTemplate,
  args: {},
};
