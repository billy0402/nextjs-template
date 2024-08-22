import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';

const TextareaField = ({
  register,
  formState: { errors },
  fieldConfig: {
    name,
    label,
    placeholder,
    required,
    disabled,
    defaultValue,
    pattern,
    validate,
  },
}: FieldProps) => {
  return (
    <FormControl
      as='section'
      isDisabled={disabled}
      isInvalid={Boolean(errors[name])}
      isRequired={required}
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Textarea
        {...register(name, {
          required: required && `${label}為必填欄位`,
          pattern,
          validate,
        })}
        borderColor='line'
        defaultValue={defaultValue}
        id={name}
        minH='24px'
        placeholder={placeholder ?? `請輸入${label}`}
        resize='vertical'
        size='lg'
      />
      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default TextareaField;
