import { Heading, Text } from '@chakra-ui/react';

import type { OptionsType } from '@/components/Form/Field/models/field-config';
import type { FieldProps } from '@/components/Form/FieldDisplay';
import FieldBox from '@/components/Form/FieldDisplay/FieldBox';

const OptionsField = ({
  fieldConfig: { label, options, displayOptions },
  currentValue,
}: FieldProps<OptionsType>) => {
  const currentItemIndex: number =
    options?.findIndex((item) => item === currentValue) ?? -1;

  return (
    <FieldBox>
      <Heading size='xm'>{label}</Heading>
      <Text fontSize='md' pt='1'>
        {displayOptions?.[currentItemIndex] ?? '無'}
      </Text>
    </FieldBox>
  );
};

export default OptionsField;
