import { StoryFn } from '@storybook/react';

import { FC, ReactElement, useState } from 'react';

import { Container } from '@chakra-ui/react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import CustomBtn from '@/components/CustomBtn';

const withRHF = (Story: FC): ReturnType<StoryFn<ReactElement>> => {
  const methods = useForm();

  const [formValues, setFormValues] = useState<FieldValues>();

  return (
    <FormProvider {...methods}>
      <Container layerStyle='flex-column' maxWidth='100%' padding='sm' gap='sm'>
        <form onSubmit={methods.handleSubmit((data) => setFormValues(data))}>
          <Story />
          <CustomBtn type='submit' label='Submit' marginTop='sm' />
        </form>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </Container>
    </FormProvider>
  );
};

export default withRHF;
