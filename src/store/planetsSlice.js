import { createSlice } from "@reduxjs/toolkit";

export const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    selection: 'default',
    planets: {
      default: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      },
      about: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      },
      experience: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      },
      current: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      },
      projects: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      },
      minireddit: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      },
      tanaka: {
        focus: false,
        view: false,
        hover: false,
        animation: true
      }
    }
  },
  reducers: {
    setSelection: (state, action) => {
      state.selection = action.payload;
    },
    setPlanetAnimation: (state, action) => {
      const allPlanets = Object.getOwnPropertyNames(state.planets);
      allPlanets.forEach(planet => {
        state.planets[planet].animation = action.payload;
      });
    },
    setPlanetOrbit: (state, action) => {
      state.planets[action.payload.name].hover = action.payload.payload;
    },
    setPlanetFocus: (state, action) => {
      state.planets[action.payload.name].focus = action.payload.payload;
      const allPlanets = Object.getOwnPropertyNames(state.planets);
      const filteredPlanets = allPlanets.filter(planet => planet !== action.payload.name);
      filteredPlanets.forEach(planet => {
        state.planets[planet].focus = false
      });
    },
    setPlanetView: (state, action) => {
      state.planets[action.payload.name].view = action.payload.payload;
    }
  }
});

export const selectPlanets = state => state.planets;
export const { setSelection, setPlanetAnimation, setPlanetOrbit, setPlanetFocus, setPlanetView } = planetsSlice.actions;
export default planetsSlice.reducer;