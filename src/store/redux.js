import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./landingSlice";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";
import reviewsSlice from "./reviewsSlice";

const store = configureStore({
  reducer: {
    landing: landingSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
    reviews: reviewsSlice.reducer,
  },
});

export default store;
