const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});
// WITH REDUX TOOLKIT THE CONFIGURE STORE WILL HANDLE THE CONBINE REDUCERS
// UNDER THE HOOD

module.exports = store;
