const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  // CREATE SLICE WILL AUTOMATICALLY CREATE ACTIONS WITH SAME NAMES AS
  // BELOW FUNCTIONS ICECREAM/ORDERED
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecreams--;
      // NO NEED TO RETURN THE STATE WE CAN DIRECTLY MUTATE THE STATE
      // CREATE SLICE UNDER THE HOOD USES IMMER LIBRARY
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;

// THIS SLICE EFFECTIVELY TAKES CARE OF DEFINING AN ACTION TYPE CONSTANT,
// AN ACTION OBJECT, AN ACTION CREATOR, SWITCH STATEMENT IN THE REDUCER
// HANDLING IMMUTABLE UPDATES IN THE REDUCER
