import { configureStore } from "@reduxjs/toolkit"
//TODO: absolute imports
import counterReducer from "../features/counter/counterSlice"
import gasTrackerReducer from "../features/gasTracker/gasTrackerSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    gasTracker: gasTrackerReducer,
  },
})

export default store
