const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // BY DEFAULT CONFIGURE STORE FUNCTION ADDS SOME MIDDLEWARE TO THE REDUX STORE SETUP
  // AUTOMATICALLY, SO CONCAT THE LOGGER TO THE DEFAULT LIST
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// WITH REDUX TOOLKIT THE CONFIGURE STORE WILL HANDLE THE CONBINE REDUCERS
// UNDER THE HOOD

module.exports = store;
