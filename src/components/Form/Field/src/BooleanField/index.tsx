import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';

const BooleanField = ({
  register,
  watch,
  formState: { errors },
  fieldConfig: { name, label, required, defaultValue, pattern, validate },
}: FieldProps) => {
  const defaultChecked = defaultValue?.toString() === 'true';
  const currentValue = watch(name) ?? defaultChecked;

  return (
    <FormControl
      as='section'
      isInvalid={Boolean(errors[name])}
      isRequired={required}
    >
      <FormLabel htmlFor='name'>{label}</FormLabel>
      <Switch
        {...register(name, {
          // required: required && `${label}為必填欄位`,
          pattern,
          validate,
        })}
        defaultChecked={defaultChecked}
        id={name}
        isChecked={currentValue}
        isRequired={false}
        size='lg'
      />
      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default BooleanField;
