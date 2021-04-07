import { configureStore } from "@reduxjs/toolkit"
//TODO: absolute imports
import gasTrackerReducer from "features/gasTracker/gasTrackerSlice"

const store = configureStore({
  reducer: {
    gasTracker: gasTrackerReducer,
  },
})

export default store
