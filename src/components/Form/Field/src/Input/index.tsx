import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';
import { dotKeysValue } from '@/helpers/object';

const InputField = ({
  register,
  formState: { errors },
  fieldConfig: {
    name,
    type,
    label,
    placeholder,
    required,
    disabled,
    defaultValue,
    pattern,
    validate,
    min,
    max,
  },
}: FieldProps) => {
  return (
    <FormControl
      as='section'
      isDisabled={disabled}
      isInvalid={!!dotKeysValue(errors, name)}
      isRequired={required}
    >
      <FormLabel display='flex' htmlFor={name}>
        {label}
      </FormLabel>
      <Input
        {...register(name, {
          required: required && `${label}為必填欄位`,
          valueAsNumber: (type === 'number') as any,
          pattern,
          validate,
          min: { value: min as number, message: `最小值為 ${min}` },
          max: { value: max as number, message: `最大值為 ${max}` },
        })}
        borderColor='line'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder ?? `請輸入${label}`}
        size='lg'
        type={type}
      />

      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default InputField;
