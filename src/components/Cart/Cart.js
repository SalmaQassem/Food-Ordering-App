import "./Cart.css";
import { Fragment } from "react";
import Overlay from "../UI/Overlay";
import Button from "../UI/Button";
import RemoveButton from "../UI/RemoveButton";
import { cartActions } from "../../store/cartSlice";
import { useCallback } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onRemoveAllHandler = useCallback(() => {
    dispatch(cartActions.removeAll());
  }, [dispatch]);

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
              {cart.items.length > 0 &&
                cart.items.map((item) => {
                  return <CartItem data={item} key={item.id} />;
                })}
            </div>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-content">
            <div className="total">
              <h1>sub-total</h1>
              <p>{cart.totalAmount} items</p>
            </div>
            <h1>${cart.totalPrice}</h1>
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
