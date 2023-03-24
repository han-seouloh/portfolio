import { createSlice } from "@reduxjs/toolkit";

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState: {
    about: {
      welcome: 1,
      intro: 0,
      interests: 5,
      values: 4,
      hobbies: 3,
      contact: 2
    },
    active: false
  },
  reducers: {
    handleAbout: (state, action) => {
      const sections = Object.getOwnPropertyNames(state.about);

      if (action.payload === 'up') {
        sections.forEach(section => {
          if (state.about[section] >= 5) {
            state.about[section] = 0;
          } else {
            state.about[section] += 1
          }
        });
      } else {
        sections.forEach(section => {
          if (state.about[section] <= 0) {
            state.about[section] = 5;
          } else {
            state.about[section] -= 1
          }
        });
      } 
    },
    setActive: (state) => {
      state.active = true;
    },
    resetSections: (state) => {
      const aboutSections = Object.getOwnPropertyNames(state.about);

      aboutSections.forEach(section => {
        switch (section) {
          case 'welcome':
            state.about[section] = 1
            break;
          case 'intro':
            state.about[section] = 0
            break;
          case 'interests':
              state.about[section] = 5
              break;
          case 'values':
              state.about[section] = 4
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

      state.active = false;
    }
  }
});

export const selectSections = state => state.sections;
export const { handleAbout, setActive, resetSections } = sectionsSlice.actions;
export default sectionsSlice.reducer;