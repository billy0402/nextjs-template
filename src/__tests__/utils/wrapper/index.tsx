import ReactQueryWrapper from './react-query';
import ReduxWrapper from './redux';

type Props = {
  children?: React.ReactNode;
};

const wrapper = ({ children }: Props) => {
  return (
    <ReduxWrapper>
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </ReduxWrapper>
  );
};

export default wrapper;
