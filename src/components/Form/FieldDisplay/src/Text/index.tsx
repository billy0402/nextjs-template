import { Heading, Text } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/FieldDisplay';
import FieldBox from '@/components/Form/FieldDisplay/FieldBox';
import datetime from '@/helpers/datetime';

const TextField = ({
  fieldConfig: { label, type },
  currentValue,
}: FieldProps) => {
  const displayValue = () => {
    switch (type) {
      case 'date':
        return currentValue ? datetime(currentValue).displayDate() : '無';
      case 'boolean':
        return currentValue ? '是' : '否';
      default:
        return currentValue ?? '無';
    }
  };

  return (
    <FieldBox>
      <Heading size='xm'>{label}</Heading>
      <Text fontSize='md' pt='1'>
        {displayValue()}
      </Text>
    </FieldBox>
  );
};

export default TextField;
