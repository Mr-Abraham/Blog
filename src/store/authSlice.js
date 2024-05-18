import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      (state.status = false), (state.userData = null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
