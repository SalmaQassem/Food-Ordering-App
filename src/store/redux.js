import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./landingSlice";
import menuSlice from "./menuSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    landing: landingSlice.reducer,
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
