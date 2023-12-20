import { createSlice } from '@reduxjs/toolkit';

import { LayoutType } from '@/enums/layout-type';

type LayoutState = {
  layoutType: LayoutType;
};

const initialState: LayoutState = {
  layoutType: LayoutType.CLIENT,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayoutType: (state, action) => {
      state.layoutType = action.payload;
    },
  },
});

export const { setLayoutType } = layoutSlice.actions;
export default layoutSlice.reducer;
