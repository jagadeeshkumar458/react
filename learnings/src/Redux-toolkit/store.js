import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import icecreamReducer from "./features/icecream/icecreamSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

// WITH REDUX TOOLKIT THE CONFIGURE STORE FUNCTION WILL HANDLE COMBINIG
// REDUCERS UNDER THE HOOD

export default store;
