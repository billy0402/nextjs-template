import { FormControl, FormLabel, Select } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';

const SelectField = ({
  register,
  formState: { errors },
  fieldConfig: {
    name,
    label,
    placeholder,
    required,
    disabled,
    options,
    displayOptions,
  },
}: FieldProps<'select'>) => {
  return (
    <FormControl
      as='section'
      isDisabled={disabled}
      isInvalid={Boolean(errors[name])}
      isRequired={required}
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select
        placeholder={placeholder ?? `請選擇${label}`}
        size='lg'
        {...register(name, {
          required: required && `${label}為必填欄位`,
        })}
        borderColor='line'
      >
        {options?.map((option, index) => (
          <option key={option} value={option}>
            {displayOptions && displayOptions[index]
              ? displayOptions[index]
              : option}
          </option>
        ))}
      </Select>
      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default SelectField;
