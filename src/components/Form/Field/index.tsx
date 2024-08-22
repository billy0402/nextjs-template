import { GridItem } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import type { FieldConfig } from '@/components/Form/Field/models/field-config';

// eslint-disable-next-line import/no-cycle
import ArrayFields from './src/ArrayFields';
import BooleanField from './src/BooleanField';
import CheckboxField from './src/Checkbox';
import Input from './src/Input';
import RadioField from './src/Radio';
import SelectField from './src/Select';
import TextareaField from './src/Textarea';

type Props = {
  fieldConfig: FieldConfig;
};

const Field = ({ fieldConfig }: Props) => {
  const methods = useFormContext();

  switch (fieldConfig.type) {
    case 'hidden':
      return null;
    case 'textarea':
      return <TextareaField {...methods} fieldConfig={fieldConfig} />;
    case 'select':
      return (
        <SelectField
          {...methods}
          fieldConfig={fieldConfig as FieldConfig<'select'>}
        />
      );
    case 'radio':
      return (
        <RadioField
          {...methods}
          fieldConfig={fieldConfig as FieldConfig<'radio'>}
        />
      );
    case 'checkbox':
      return (
        <CheckboxField
          {...methods}
          fieldConfig={fieldConfig as FieldConfig<'checkbox'>}
        />
      );
    case 'boolean':
      return <BooleanField {...methods} fieldConfig={fieldConfig} />;
    case 'array':
      return (
        <ArrayFields
          {...methods}
          fieldConfig={fieldConfig as FieldConfig<'array'>}
        />
      );
    default:
      return <Input {...methods} fieldConfig={fieldConfig} />;
  }
};

const FieldItem = ({ fieldConfig }: Props) => {
  if (fieldConfig.type === 'hidden') return null;

  return (
    <GridItem as='article' colSpan={fieldConfig.col ?? 12}>
      <Field fieldConfig={fieldConfig} />
    </GridItem>
  );
};

export default FieldItem;
