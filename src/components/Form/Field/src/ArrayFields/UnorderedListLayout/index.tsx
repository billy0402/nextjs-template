import { UnorderedList } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  hidden?: boolean;
};

const UnorderedListLayout = ({ children, hidden = false }: Props) => {
  return (
    <UnorderedList
      _after={{
        position: 'absolute',
        content: hidden ? 'none' : '""',
        w: '8px',
        bg: 'text_accent',
        h: '8px',
        left: '17px',
        bottom: '0',
        borderRadius: '50%',
      }}
      _before={{
        position: 'absolute',
        content: hidden ? 'none' : '""',
        height: '100%',
        width: '3px',
        bg: 'text_accent',
        left: '19px',
      }}
      _last={{ marginBottom: 0 }}
      listStyleType='none'
      mb='10px'
      ml={0}
      pl={hidden ? '0' : '50px'}
      position='relative'
    >
      {children}
    </UnorderedList>
  );
};

export default UnorderedListLayout;
