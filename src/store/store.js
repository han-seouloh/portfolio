import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "./planetsSlice";
import infoReducer from "./infoSlice";
import sectionsReducer from "./sectionsSlice";
import clicksReducer from "./clicksSlice";
import scrollReducer from "./scrollSlice";

export default configureStore ({
  reducer: {
    planets: planetsReducer,
    info: infoReducer,
    sections: sectionsReducer,
    clicks: clicksReducer,
    scroll: scrollReducer
  }
});