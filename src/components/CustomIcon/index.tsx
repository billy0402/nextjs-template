import type { IconProps } from '@chakra-ui/react';
import { Icon as ChakraIcon, forwardRef } from '@chakra-ui/react';

import type { IconBaseProps } from 'react-icons';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import {
  MdDarkMode,
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowRight,
  MdLightMode,
} from 'react-icons/md';

export const icons = {
  // 向下三角箭頭
  chevronDown: MdKeyboardArrowDown,
  // 向左三角箭頭
  chevronLeft: MdKeyboardArrowLeft,
  // 向右三角箭頭
  chevronRight: MdKeyboardArrowRight,
  // 向右雙三角箭頭
  doubleChevronRight: MdKeyboardDoubleArrowRight,
  // 向上三角箭頭
  chevronUp: MdKeyboardArrowUp,
  // 向下箭頭
  arrowDown: AiOutlineArrowDown,
  // 向左箭頭
  arrowLeft: AiOutlineArrowLeft,
  // 向右箭頭
  arrowRight: AiOutlineArrowRight,
  // 向上箭頭
  arrowUp: AiOutlineArrowUp,
  // 搜尋
  search: FaSearch,
  // 篩選
  filter: IoFilter,
  // 隊列新增
  addToQueue: BiSolidAddToQueue,
  // 刪除
  delete: MdDelete,
  // 亮光模式
  lightMode: MdLightMode,
  // 黑夜模式
  darkMode: MdDarkMode,
};

export type IconName = keyof typeof icons;

type Props = IconProps &
  IconBaseProps & {
    name: IconName;
  };

const CustomIcon = forwardRef<Props, 'svg'>((props: Props, ref) => {
  return <ChakraIcon ref={ref} as={icons[props.name]} {...props} />;
});

export default CustomIcon;
