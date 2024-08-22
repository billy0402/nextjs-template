import type { IconButtonProps, TooltipProps } from '@chakra-ui/react';
import { IconButton, Tooltip, forwardRef } from '@chakra-ui/react';

import type { IconName } from '@/components/CustomIcon';
import CustomIcon from '@/components/CustomIcon';
import type { ColorScheme, ThemeColor } from '@/fixtures/theme/colors';

type Props = Omit<IconButtonProps, 'icon'> & {
  icon: IconName;
  colorScheme?: ColorScheme;
  color?: ThemeColor;
  backgroundColor?: ThemeColor;
  tooltipPosition?: TooltipProps['placement'];
};

const defaultProps: Partial<Props> = {
  colorScheme: 'accent',
  fontSize: '2xl',
  tooltipPosition: 'bottom',
};

const CustomIconBtn = forwardRef<Props, 'button'>((props: Props, ref) => {
  const { icon, tooltipPosition, ...buttonProps } = props;

  return (
    <Tooltip label={props['aria-label']} placement={tooltipPosition}>
      <IconButton
        {...buttonProps}
        ref={ref}
        icon={<CustomIcon name={icon} />}
      />
    </Tooltip>
  );
});

CustomIconBtn.defaultProps = defaultProps;

export default CustomIconBtn;
