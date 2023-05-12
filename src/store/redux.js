import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
