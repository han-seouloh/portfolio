import { createSlice } from "@reduxjs/toolkit";

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: {
    clickNum: 0
  },
  reducers: {
    setClickNum: (state, action) => {
      state.clickNum = action.payload;
    }
  }
});

export const selectClicks = state => state.clicks;
export const { setClickNum } = clicksSlice.actions;
export default clicksSlice.reducer;