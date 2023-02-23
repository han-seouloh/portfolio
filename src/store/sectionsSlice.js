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
    },
    resetSections: (state) => {
      const aboutSections = Object.getOwnPropertyNames(state.about);

      aboutSections.forEach(section => {
        switch (section) {
          case 'intro':
            state.about[section] = 1
            break;
          case 'values':
              state.about[section] = 0
              break;
          case 'hobbies':
            state.about[section] = 3
            break;
          case 'contact':
            state.about[section] = 2
            break;
          default:
            break;
        }
      });
    }
  }
});

export const selectSections = state => state.sections;
export const { handleAbout, resetSections } = sectionsSlice.actions;
export default sectionsSlice.reducer;