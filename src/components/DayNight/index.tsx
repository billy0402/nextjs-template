import { useColorMode } from '@chakra-ui/react';

import CustomIconBtn from '@/components/CustomIconBtn';

const DayNight = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <CustomIconBtn
      _after={{
        content: '""',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 65px 65px 0',
        borderColor: `transparent ${isDark ? 'white' : 'black'} transparent transparent`,
        position: 'absolute',
        zIndex: -1,
        right: 0,
        top: 0,
      }}
      _hover={{ backgroundColor: 'transparent' }}
      aria-label='Toggle color mode'
      bg='transparent'
      color={colorMode === 'dark' ? 'text' : 'accent'}
      icon={colorMode === 'dark' ? 'darkMode' : 'lightMode'}
      position='fixed'
      right={0}
      tooltipPosition='left'
      top={0}
      onClick={toggleColorMode}
    />
  );
};

export default DayNight;
