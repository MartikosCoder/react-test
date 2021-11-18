import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: '',
      age: 0,
      children: []
    },
  },
  reducers: {
    set: (state, action) => {
      state.value = {...action.payload};
    }
  },
});

export const { set } = userSlice.actions;
export default userSlice.reducer;
