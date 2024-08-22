import { useCallback } from 'react';

import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import ErrorMessage from '@/components/Form/Field/src/field-elements/ErrorMessage';
import { dotKeysValue } from '@/helpers/object';

const CheckboxField = ({
  getValues,
  control,
  formState: { errors },
  fieldConfig: { name, label, required, options, displayOptions },
}: FieldProps<'checkbox'>) => {
  const validate = useCallback(() => {
    const errorMessage = '您需要勾選最少一個項目';
    const values = getValues(name);
    if (!values) return errorMessage;
    const isValid = values.some((v: any) => v);
    return isValid || errorMessage;
  }, [getValues, name]);

  return (
    <FormControl as='section' isInvalid={Boolean(dotKeysValue(errors, name))}>
      <FormLabel htmlFor={name}>
        {label}{' '}
        {required && (
          <Text as='b' color='red'>
            {' *'}
          </Text>
        )}
      </FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <CheckboxGroup {...field}>
            <Stack direction='row' spacing={5} wrap='wrap'>
              {options?.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Checkbox key={option + index} value={option}>
                  {displayOptions && displayOptions[index]
                    ? displayOptions[index]
                    : option}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        )}
        rules={{ validate: () => (required ? validate() : null) }}
      />
      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default CheckboxField;
