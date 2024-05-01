import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter(_, { payload }) {
      console.log("payload:", payload);
      return { filter: payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
