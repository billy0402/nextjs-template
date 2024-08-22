import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/fixtures/theme';

type Props = {
  children?: React.ReactNode;
};

const ChakraWrapper = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraWrapper;
