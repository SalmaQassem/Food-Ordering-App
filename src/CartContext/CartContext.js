import React from "react";

const CartContext = React.createContext({
  isCartOpened: false,
  setIsCartOpened: (state) => {},
});

export default CartContext;
