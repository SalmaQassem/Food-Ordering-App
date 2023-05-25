import { createSlice } from "@reduxjs/toolkit";

const reviewsInitialState = { items: [] };
const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviewsInitialState,
  reducers: {
    setReviewsData(state, action) {
      state.items = action.payload;
    },
  },
});

export default reviewsSlice;
export const reviewsActions = reviewsSlice.actions;
