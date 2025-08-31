import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: { calories: 0, protein: 0 }
};

export const consumeSlice = createSlice({
  name: "totalConsume",
  initialState,
  reducers: {
    setTotal: (state, action) => { state.total = action.payload } 
  },
});

export const { setTotal } = consumeSlice.actions

export default consumeSlice.reducer