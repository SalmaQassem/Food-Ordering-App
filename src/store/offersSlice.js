import { createSlice } from "@reduxjs/toolkit";

const offersInitialState = { items: [] };
const offersSlice = createSlice({
  name: "offers",
  initialState: offersInitialState,
  reducers: {
    setOffersData(state, action) {
      state.items = action.payload;
    },
  },
});

export default offersSlice;
export const offersActions = offersSlice.actions;
