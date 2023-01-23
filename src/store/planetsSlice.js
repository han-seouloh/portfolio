import { createSlice } from "@reduxjs/toolkit";

export const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    planets: {
      about: {
        focus: false,
        hover: false,
        animation: true
      },
      experience: {
        focus: false,
        hover: false,
        animation: true
      },
      current: {
        focus: false,
        hover: false,
        animation: true
      },
      projects: {
        focus: false,
        hover: false,
        animation: true
      },
      minireddit: {
        focus: false,
        hover: false,
        animation: true
      },
      tanaka: {
        focus: false,
        hover: false,
        animation: true
      }
    }
  },
  reducers: {
    setPlanetAnimation: (state, action) => {
      const allPlanets = Object.getOwnPropertyNames(state.planets);
      allPlanets.forEach(planet => {
        state.planets[planet].animation = action.payload;
      });
    },
    setPlanetOrbit: (state, action) => {
      state.planets[action.payload.name].hover = action.payload.payload;
    }
  }
});

export const selectPlanets = state => state.planets;
export const { setPlanetAnimation, setPlanetOrbit } = planetsSlice.actions;
export default planetsSlice.reducer;