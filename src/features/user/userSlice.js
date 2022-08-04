import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch } from "../../common/libs";
import { apis } from "../../data";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const { data } = await fetch.get(apis.users);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, { error }) => {
      state.loading = false;
      state.users = [];
      state.error = error.message;
    });
  },
});

export default userSlice.reducer;
