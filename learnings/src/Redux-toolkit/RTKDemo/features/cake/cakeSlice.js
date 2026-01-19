const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  // CREATE SLICE WILL AUTOMATICALLY CREATE ACTIONS WITH SAME NAMES AS
  // BELOW FUNCTIONS CAKE/ORDERED
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--;
      // NO NEED TO RETURN THE STATE WE CAN DIRECTLY MUTATE THE STATE
      // CREATE SLICE UNDER THE HOOD USES IMMER LIBRARY
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

// THIS SLICE EFFECTIVELY TAKES CARE OF DEFINING AN ACTION TYPE CONSTANT,
// AN ACTION OBJECT, AN ACTION CREATOR, SWITCH STATEMENT IN THE REDUCER
// HANDLING IMMUTABLE UPDATES IN THE REDUCER
