import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '@chakra-ui/react';

import SearchForm from '@/components/Form/SearchForm';

const meta = {
  title: 'Form/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    advancedSearchConfigs: undefined,
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const ContainerTemplate: Story = {
  render: () => {
    return (
      <Container maxWidth='100%' minHeight='300px' padding='unset'>
        <SearchForm advancedSearchConfigs={undefined} />
      </Container>
    );
  },
};

export const Default: Story = {
  ...ContainerTemplate,
  args: {},
};
