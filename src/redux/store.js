import rootReducer from "./rootReducer"
import { Tuple } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { thunk } from "redux-thunk"


const store= configureStore({
    reducer: rootReducer,
  middleware: () => new Tuple(logger,thunk),
})
export default store