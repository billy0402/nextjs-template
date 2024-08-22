import ChakraWrapper from './chakra';
import ReactQueryWrapper from './react-query';
import ReduxWrapper from './redux';

type Props = {
  children?: React.ReactNode;
};

const wrapper = ({ children }: Props) => {
  return (
    <ReduxWrapper>
      <ReactQueryWrapper>
        <ChakraWrapper>{children}</ChakraWrapper>
      </ReactQueryWrapper>
    </ReduxWrapper>
  );
};

export default wrapper;
