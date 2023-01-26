import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "./planetsSlice";
import infoReducer from "./infoSlice";

export default configureStore ({
  reducer: {
    planets: planetsReducer,
    info: infoReducer
  }
});