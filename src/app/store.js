import { configureStore } from "@reduxjs/toolkit"
//TODO: absolute imports
import gasTrackerReducer from "src/features/gasTracker/gasTrackerSlice"

const store = configureStore({
  reducer: {
    gasTracker: gasTrackerReducer,
  },
})

export default store
