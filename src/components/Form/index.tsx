import { useEffect } from 'react';

import { Grid } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import { fieldSetDefault } from '@/helpers/field-set-default';

import FieldItem from './Field';
import type { FieldConfig } from './Field/models/field-config';

type Props = {
  fieldConfigs: FieldConfig[];
  resetData?: any;
  onSubmit: (data: any) => void;
  children?: React.ReactNode;
};

const Form = ({ fieldConfigs, resetData, onSubmit, children }: Props) => {
  const methods = useForm();

  useEffect(() => {
    if (!resetData) return;
    methods.reset(fieldSetDefault(fieldConfigs, resetData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetData]);

  return (
    <FormProvider {...methods}>
      <Grid
        as='form'
        gap={6}
        templateColumns='repeat(12, 1fr)'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {fieldConfigs.map((fieldConfig) => (
          <FieldItem key={fieldConfig.name} fieldConfig={fieldConfig} />
        ))}
        {children}
      </Grid>
    </FormProvider>
  );
};

export default Form;
