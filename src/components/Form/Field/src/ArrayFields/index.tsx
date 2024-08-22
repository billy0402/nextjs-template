import { Box, FormLabel, Text } from '@chakra-ui/react';
import { useFieldArray } from 'react-hook-form';

import CustomIconBtn from '@/components/CustomIconBtn';
import type { FieldProps } from '@/components/Form/Field/models/field-config';

import UnorderedListLayout from './UnorderedListLayout';
// eslint-disable-next-line import/no-cycle
import UnorderedListItem from './UnorderedListLayout/Item';

const ArrayFields = ({
  fieldConfig: {
    name,
    arrayHeaderKey,
    label,
    required,
    defaultValue,
    fieldConfigs,
  },
  watch,
}: FieldProps<'array'>) => {
  const { fields, append, remove, move } = useFieldArray({ name });

  return (
    <Box>
      <FormLabel htmlFor={name}>
        {label}
        {required && (
          <Text as='b' color='red'>
            {' *'}
          </Text>
        )}
      </FormLabel>
      <Box as='main'>
        <CustomIconBtn
          aria-label='新增項目'
          backgroundColor='accent'
          fontSize='xl'
          icon='addToQueue'
          onClick={() => append((defaultValue as any)?.[0] ?? {})}
        />
        {fieldConfigs && fields ? (
          <UnorderedListLayout>
            {fields.map((field, index, arr) => (
              <UnorderedListItem
                key={field.id}
                arr={arr}
                arrayHeaderKey={arrayHeaderKey}
                fieldConfigs={fieldConfigs}
                index={index}
                itemKey={field.id}
                label={label}
                move={move}
                name={name}
                remove={remove}
                watch={watch}
              />
            ))}
          </UnorderedListLayout>
        ) : null}
      </Box>
    </Box>
  );
};

export default ArrayFields;
