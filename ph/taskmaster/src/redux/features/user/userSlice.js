import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Abul Babul",
  email: "abul@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
