import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const FieldBox = ({ children }: Props) => {
  return (
    <Box
      _last={{ borderBottom: 'none' }}
      as='section'
      borderBottom='1px solid #EBEBF2'
      m='0 12px'
      p='8px 0'
    >
      {children}
    </Box>
  );
};

export default FieldBox;
