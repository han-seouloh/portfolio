import { createSlice } from "@reduxjs/toolkit";

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: {
    currentSelection: '',
    clicks: {
      default: 0,
      about: 0,
      experience: 0,
      current: 0,
      projects: 0,
      minireddit: 0,
      tanaka: 0
    }
  },
  reducers: {
    setClickNum: (state, action) => {
      state.currentSelection = action.payload.name;
      state.clicks[action.payload.name] = action.payload.clickNum;
      const clicksArray = Object.getOwnPropertyNames(state.clicks);
      const filteredClicks = clicksArray.filter( section =>
        section !== state.currentSelection
      );
      filteredClicks.forEach( section => {
        state.clicks[section] = 0;
      });
    }
  }
});

export const selectClicks = state => state.clicks;
export const { setClickNum } = clicksSlice.actions;
export default clicksSlice.reducer;