import "./Cart.css";
import { Fragment } from "react";
import Overlay from "../UI/Overlay";
import Button from "../UI/Button";
import RemoveButton from "../UI/RemoveButton";
import { useContext, useCallback } from "react";
import CartContext from "../../CartContext/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
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

  const onClickCancelHandler = useCallback(() => {
    props.cartClosed();
  }, [props]);

  return (
    <Fragment>
      <Overlay
        className={
          props.cartState === true ? "cart-overlay opened" : "cart-overlay"
        }
      ></Overlay>
      <section id="Cart" className={props.cartState === true ? "opened" : ""}>
        <div className="cart-content">
          <div className="cart-header">
            <h1>shopping cart</h1>
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
              <h1>sub-total</h1>
              <p>{context.totalAmount} items</p>
            </div>
            <h1>${context.totalPrice}</h1>
          </div>
          <div className="checkout-buttons">
            <Button onClick={onClickCancelHandler}>cancel</Button>
            <Button>checkout</Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Cart;
