import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartSatet, setCartState] = useState(false);

  const setIsCartOpenedHandler = (state) => {
    setCartState(state);
  };

  const cartContext = {
    isCartOpened: cartSatet,
    setIsCartOpened: setIsCartOpenedHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
