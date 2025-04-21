import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Abul",
  email: "abul@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
