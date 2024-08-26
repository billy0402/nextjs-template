import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap');
    `}
  />
);

export default Fonts;
