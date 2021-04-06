import { configureStore } from "@reduxjs/toolkit"
//TODO: absolute imports
import counterReducer from "../features/counter/counterSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store
