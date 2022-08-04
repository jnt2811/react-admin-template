import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "../features/user/userSlice";

const reducer = combineReducers({
  user: userReducer,
});

const logger = createLogger();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
