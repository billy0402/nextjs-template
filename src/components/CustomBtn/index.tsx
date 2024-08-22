import type { ButtonProps } from '@chakra-ui/react';
import { Button, forwardRef } from '@chakra-ui/react';

import type { ColorScheme, ThemeColor } from '@/fixtures/theme/colors';

type Props = ButtonProps & {
  label: string;
  colorScheme?: ColorScheme;
  color?: ThemeColor;
  backgroundColor?: ThemeColor;
};

const defaultProps: Partial<Props> = {
  colorScheme: 'accent',
  minW: '125px',
};

const CustomBtn = forwardRef<Props, 'button'>((props: Props, ref) => {
  const { label } = props;

  return (
    <Button ref={ref} {...props}>
      {label}
    </Button>
  );
});

CustomBtn.defaultProps = defaultProps;

export default CustomBtn;
