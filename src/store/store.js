import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "./planetsSlice";
import infoReducer from "./infoSlice";
import clicksReducer from "./clicksSlice";
import sectionsReducer from "./sectionsSlice";

export default configureStore ({
  reducer: {
    planets: planetsReducer,
    info: infoReducer,
    clicks: clicksReducer,
    sections: sectionsReducer
  }
});