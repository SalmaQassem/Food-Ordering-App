import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./landingSlice";
import offersSlice from "./offersSlice";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";
import reviewsSlice from "./reviewsSlice";

const store = configureStore({
  reducer: {
    landing: landingSlice.reducer,
    offers: offersSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
    reviews: reviewsSlice.reducer,
  },
});

export default store;
