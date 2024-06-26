import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = { value: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter: (_, { payload }) => ({
      value: payload,
    }),
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
