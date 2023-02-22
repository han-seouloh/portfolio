import { createSlice } from "@reduxjs/toolkit";

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    about: {
      intro: 1,
      values: 0,
      hobbies: 3,
      contact: 2
    }
  },
  reducers: {
    handleAbout: (state, action) => {
      const sections = Object.getOwnPropertyNames(state.about);

      if (action.payload === 'up') {
        sections.forEach(section => {
          if (state.about[section] >= 3) {
            state.about[section] = 0;
          } else {
            state.about[section] += 1
          }
        });
      } else {
        sections.forEach(section => {
          if (state.about[section] <= 0) {
            state.about[section] = 3;
          } else {
            state.about[section] -= 1
          }
        });
      } 
    }
  }
});

export const selectSections = state => state.sections;
export const { handleAbout } = sectionsSlice.actions;
export default sectionsSlice.reducer;