import { createSlice } from "@reduxjs/toolkit";

export const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    planets: {
      about: {
        visibility: true,
        animation: true
      },
      experience: {
        visibility: true,
        animation: true
      },
      projects: {
        visibility: true,
        animation: true
      },
      minireddit: {
        visibility: true,
        animation: true
      },
      tanaka: {
        visibility: true,
        animation: true
      }
    }
  },
  reducers: {
    setPlanet: (state, action) => {
      state.planets[action.payload.name] = action.payload.stateChange;
    }
  }
});

export const selectPlanets = state => state.planets;
export const { setPlanet } = planetsSlice.actions;
export default planetsSlice.reducer;