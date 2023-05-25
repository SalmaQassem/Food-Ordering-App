import { createSlice } from "@reduxjs/toolkit";

const landingInisialState = { items: [] };
const landingSlice = createSlice({
  name: "landing",
  initialState: landingInisialState,
  reducers: {
    setLandingData(state, action) {
      state.items = action.payload;
    },
  },
});

export const landingActions = landingSlice.actions;
export default landingSlice;
