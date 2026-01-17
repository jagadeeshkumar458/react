import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      // WE CAN DIRECTLY MODIFY THE STATE HERE BECAUSE CREATE SLICE UNDER THE HOOD
      // USES IMMER LIBRARY
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// THIS SLICE EFFECTIVRLY TAKES CARE OF DEFINING AN ACTION TYPE CONSTANT
// AN ACTION OBJECT AND ACTION CREATOR AND SWITCH STATEMENTS IN THE REDUCER
// AND HANDLING IMMUTABLE UPDATES IN THE REDUCER

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
