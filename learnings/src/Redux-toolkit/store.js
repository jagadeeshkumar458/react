import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import icecreamReducer from "./features/icecream/icecreamSlice";
import userReducer from "./features/user/userSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// WITH REDUX TOOLKIT THE CONFIGURE STORE FUNCTION WILL HANDLE COMBINIG
// REDUCERS UNDER THE HOOD

export default store;
