import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number
  name: string
}

type InitialState = {
  loading: boolean
  users: User[]
  error: string
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

// GENERATES PENDING, FULFILLED, REJECTED ACTION TYPES
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});
// IT WILL AUTOMATICALLY DISPATCH LIFECYCLE ACTIONS BASED ON THE RETURNED PRMOISE

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'Something went wrong...';
    });
  },
});

export default userSlice.reducer;
