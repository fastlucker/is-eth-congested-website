import { configureStore } from "@reduxjs/toolkit"
//TODO: absolute imports
import gasTrackerReducer from "features/gasTracker/gasTrackerSlice"
import gasTrendReducer from "features/gasTrend/gasTrendSlice"

const store = configureStore({
  reducer: {
    gasTracker: gasTrackerReducer,
    gasTrend: gasTrendReducer,
  },
})

export default store
