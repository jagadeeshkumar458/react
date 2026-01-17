import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number
}

const initialState: InitialState = {
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
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

// THIS SLICE EFFECTIVRLY TAKES CARE OF DEFINING AN ACTION TYPE CONSTANT
// AN ACTION OBJECT AND ACTION CREATOR AND SWITCH STATEMENTS IN THE REDUCER
// AND HANDLING IMMUTABLE UPDATES IN THE REDUCER

// FOR ACTION TYPE REDUX TOOLKIT WILL TAKE THE NAME AS THE FIRST PART AND THE KEY OF EACH REDUCER
// AS THE SECOND PART THEY BOTH ARE SEPERATED BY A SLASH

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
