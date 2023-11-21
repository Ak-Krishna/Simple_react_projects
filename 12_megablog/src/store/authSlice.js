import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (State, actions) => {
      State.status = true;
      State.userData = actions.payload.userData;
    },
    logout: (State) => {
      State.status = false;
      State.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
