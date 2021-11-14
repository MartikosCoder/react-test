import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    set: (state, action) => {
      state.value = [...action.payload];
    },
    update: (state, action) => {
        const user = state.value.find(user => user.id === action.payload.id);
        if(user) {
            user.work += +action.payload.work;
            user.time += +action.payload.time;
        }
    }
  },
});

export const { add, set, update } = usersSlice.actions;
export default usersSlice.reducer;
