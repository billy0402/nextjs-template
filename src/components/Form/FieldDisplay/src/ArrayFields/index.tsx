import { Heading, Stack, Text } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/FieldDisplay';
// eslint-disable-next-line import/no-cycle
import FieldDisplay from '@/components/Form/FieldDisplay';
import FieldBox from '@/components/Form/FieldDisplay/FieldBox';

const ArrayFields = ({
  fieldConfig: { label, fieldConfigs },
  currentValue,
}: FieldProps<'array'>) => {
  return (
    <FieldBox>
      <Heading size='xm'>{label}</Heading>
      {currentValue?.map((item: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Stack key={index} border='1px solid #EBEBF2' mt='3' spacing='0'>
          {fieldConfigs?.map((fieldConfig) => (
            <FieldDisplay
              key={fieldConfig.name}
              currentValue={(item as any)[fieldConfig.name]}
              fieldConfig={fieldConfig}
            />
          ))}
        </Stack>
      ))}
      <Text fontSize='md' pt='1' />
    </FieldBox>
  );
};

export default ArrayFields;
