import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: JSON.parse(localStorage.getItem("dietData")) || []
};

export const storageSlice = createSlice({
  name: "storageData",
  initialState,
  reducers: {
    setData: (state, action) => { state.data = action.payload }
  },
});

export const { setData } = storageSlice.actions

export default storageSlice.reducer