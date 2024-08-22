import { extendTheme, useTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import config from './config';
import { fonts } from './fonts';
import { layerStyles } from './layer-styles';
import { semanticTokens } from './semantic-tokens';
import { sizes } from './sizes';
import { space } from './space';
import { styles } from './styles';

const customTheme = {
  breakpoints,
  colors,
  fonts,
  semanticTokens,
  sizes,
  space,
  styles,
  layerStyles,
  components,
  config,
};

export const theme = extendTheme(customTheme);

export const useMyTheme = useTheme<typeof customTheme>;
