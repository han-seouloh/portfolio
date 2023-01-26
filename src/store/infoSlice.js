import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    previews: {
      about: {
        heading: 'ABOUT ME',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
        aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur.`
      },
      experience:  {
        heading: '',
        body: ''
      },
      current:  {
        heading: '',
        body: ''
      },
      projects:  {
        heading: '',
        body: ''
      },
      minireddit:  {
        heading: '',
        body: ''
      },
      tanaka:  {
        heading: '',
        body: ''
      }
    }
  }
});

export const selectInfo = state => state.info;
export default infoSlice.reducer;