import type { Colors } from '@chakra-ui/react';

import { semanticTokens } from '@/fixtures/theme/semantic-tokens';
import type { Leaves } from '@/models/utils/nested-object';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: {
    '50': '#f1f3f3', // default
    '100': '#d8dfdf',
    '200': '#bfcaca',
    '300': '#a6b5b5',
    '400': '#8da0a0',
    '500': '#748b8b',
    '600': '#5d6f6f',
    '700': '#465353',
    '800': '#2e3838',
    '900': '#171c1c',
  },
  accent: {
    '50': '#fdf0e8',
    '100': '#f8d4be',
    '200': '#f4b894',
    '300': '#f09d6b',
    '400': '#ec8141', // default
    '500': '#e86517',
    '600': '#b95113',
    '700': '#8b3d0e',
    '800': '#5d2909',
    '900': '#2e1405',
  },
  auxiliary: {
    '50': '#eef5f7',
    '100': '#cee2e8',
    '200': '#afcfda',
    '300': '#8fbccb',
    '400': '#70a9bd',
    '500': '#5196ae',
    '600': '#40788c',
    '700': '#305a69', // default
    '800': '#203c46',
    '900': '#101e23',
  },
  text: {
    '50': '#f0f2f5',
    '100': '#d4dae2',
    '200': '#b9c2d0',
    '300': '#9eaabd',
    '400': '#8292aa',
    '500': '#677a98',
    '600': '#53627a',
    '700': '#3e495b', // default
    '800': '#29313d',
    '900': '#15181e',
  },
  line: {
    '50': '#f0f3f5',
    '100': '#d5dee2', // default
    '200': '#b9c8cf',
    '300': '#9eb3bd',
    '400': '#839daa',
    '500': '#688797',
    '600': '#536c79',
    '700': '#3e515b',
    '800': '#29363d',
    '900': '#151b1e',
  },
  security: {
    '50': '#ebf9f4',
    '100': '#c7efdf',
    '200': '#a3e5cb',
    '300': '#7fdbb6',
    '400': '#5cd1a2',
    '500': '#38c78d', // default
    '600': '#2d9f71',
    '700': '#217855',
    '800': '#165039',
    '900': '#0b281c',
  },
  notice: {
    '50': '#fff7e6',
    '100': '#fee9b9',
    '200': '#fedb8b',
    '300': '#fdcc5e', // default
    '400': '#fcbe31',
    '500': '#fcb003',
    '600': '#c98d03',
    '700': '#976a02',
    '800': '#654601',
    '900': '#322301',
  },
  danger: {
    '50': '#fbe9eb',
    '100': '#f5c2c8',
    '200': '#ef9aa4',
    '300': '#e87280', // default
    '400': '#e24b5d',
    '500': '#dc2339',
    '600': '#b01c2e',
    '700': '#841522',
    '800': '#580e17',
    '900': '#2c070b',
  },
} satisfies Colors;

export type ThemeColor =
  | keyof typeof semanticTokens.colors
  | Leaves<typeof colors, 2>
  | 'transparent';
export const ColorOptions = Object.keys(semanticTokens.colors) as ThemeColor[];

export type ColorScheme = keyof typeof colors;
export const ColorSchemeOptions = Object.keys(
  semanticTokens.colors,
) as ColorScheme[];
