import "./Cart.css";
import { Fragment } from "react";
import Button from "../UI/Button";
import RemoveButton from "../UI/RemoveButton";
import { useContext, useCallback } from "react";
import CartContext from "../../CartContext/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  let context = useContext(CartContext);
  const onAddItemHandler = useCallback(
    (item) => {
      context.addItems(item);
    },
    [context]
  );
  const onRemoveItemHandler = useCallback(
    (item, type) => {
      context.removeItems(item, type);
    },
    [context]
  );
  const onRemoveAllHandler = useCallback(() => {
    context.removeItems(context.items, "REMOVEALL");
  }, [context]);

  const onCLickCancelHandler = useCallback(() => {
    document.getElementById("Cart").classList.remove("opened");
    document.querySelector(".cart-overlay").classList.remove("opened");
  }, []);

  return (
    <Fragment>
      <div className="cart-overlay"></div>
      <section id="Cart">
        <div className="cart-content">
          <div className="cart-header">
            <h2>shopping cart</h2>
            <RemoveButton onClick={onRemoveAllHandler}>remove all</RemoveButton>
          </div>
          <div className="cart-body">
            <div className="items-list">
              {context.items.length > 0 &&
                context.items.map((item) => {
                  return (
                    <CartItem
                      data={item}
                      key={item.id}
                      onAddItem={onAddItemHandler}
                      onRemoveItem={onRemoveItemHandler}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-content">
            <div className="total">
              <h2>sub-total</h2>
              <p>{context.totalAmount} items</p>
            </div>
            <h2>${context.totalPrice}</h2>
          </div>
          <div className="checkout-buttons">
            <Button onClick={onCLickCancelHandler}>cancel</Button>
            <Button>checkout</Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Cart;
