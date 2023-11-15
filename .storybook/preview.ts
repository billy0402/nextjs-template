import type { Preview } from '@storybook/react';

import withReactQuery from './decorators/with-react-query';
import withRedux from './decorators/with-redux';

import { theme } from '../src/fixtures/theme';

const preview: Preview = {
  decorators: [withRedux, withReactQuery],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
