import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "./planetsSlice";
import infoReducer from "./infoSlice";
import clicksReducer from "./clicksSlice";

export default configureStore ({
  reducer: {
    planets: planetsReducer,
    info: infoReducer,
    clicks: clicksReducer
  }
});