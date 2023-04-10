import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartSatet, setCartState] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const addItemsHandler = (item) => {
    let newTotalAmount = cartSatet.totalAmount + 1;
    let newTotalPrice = cartSatet.totalPrice + item.price;

    let found = false;
    for (let i = 0; i < cartSatet.items.length; i++) {
      if (cartSatet.items[i].id === item.id) {
        cartSatet.items[i].amount += 1;
        found = true;
        break;
      }
    }
    if (found === false) {
      setCartState((prevState) => {
        return {
          items: [...prevState.items, item],
          totalAmount: newTotalAmount,
          totalPrice: newTotalPrice,
        };
      });
    } else {
      setCartState((prevState) => {
        return {
          items: [...prevState.items],
          totalAmount: newTotalAmount,
          totalPrice: newTotalPrice,
        };
      });
    }
  };

  const removeItemHandler = (item, type) => {
    if (cartSatet.items.length > 0) {
      let newTotalAmount;
      let newTotalPrice;
      if (type === "DEC" || type === "REMOVE") {
        const index = cartSatet.items.findIndex(
          (element) => element.id === item.id
        );
        if (type === "DEC") {
          cartSatet.items[index].amount -= 1;
          newTotalAmount = cartSatet.totalAmount - 1;
          newTotalPrice = cartSatet.totalPrice - item.price;
        } else if (type === "REMOVE") {
          newTotalAmount =
            cartSatet.totalAmount - cartSatet.items[index].amount;
          newTotalPrice =
            cartSatet.totalPrice - cartSatet.items[index].amount * item.price;
          cartSatet.items[index].amount = 0;
        }
        if (cartSatet.items[index].amount <= 0) {
          cartSatet.items = cartSatet.items.filter((element) => {
            return element.id !== cartSatet.items[index].id;
          });
        }
      } else if (type === "REMOVEALL") {
        newTotalAmount = 0;
        newTotalPrice = 0;
        cartSatet.items = [];
      }
      setCartState({
        items: [...cartSatet.items],
        totalAmount: newTotalAmount,
        totalPrice: newTotalPrice,
      });
    }
  };

  const cartContext = {
    items: cartSatet.items,
    totalAmount: cartSatet.totalAmount,
    totalPrice: cartSatet.totalPrice,
    addItems: addItemsHandler,
    removeItems: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
