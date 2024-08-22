import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';

const RadioField = ({
  control,
  formState: { errors },
  fieldConfig: { name, label, required, options, displayOptions },
}: FieldProps<'radio'>) => {
  return (
    <FormControl
      as='section'
      isInvalid={Boolean(errors[name])}
      isRequired={required}
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Stack direction='row' spacing={5} wrap='wrap'>
              {options?.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Radio key={option + index} color='text-color' value={option}>
                  {displayOptions && displayOptions[index]
                    ? displayOptions[index]
                    : option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />
      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default RadioField;
