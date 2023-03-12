import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    scroll: false
  },
  reducers: {
    setScroll: (state) => {
      state.scroll = true;
    },
    resetScroll: (state) => {
      state.scroll = false;
    }
  }
});

export const selectScroll = state => state.scroll;
export const { setScroll, resetScroll } = scrollSlice.actions;
export default scrollSlice.reducer;