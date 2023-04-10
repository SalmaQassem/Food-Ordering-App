import "./Cart.css";
import { Fragment } from "react";
import Button from "../UI/Button";
import RemoveButton from "../UI/RemoveButton";
import { useContext } from "react";
import CartContext from "../../CartContext/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  let context = useContext(CartContext);
  const onAddItemHandler = (item) => {
    context.addItems(item);
  };
  const onRemoveItemHandler = (item, type) => {
    context.removeItems(item, type);
  };
  const onRemoveAllHandler = () => {
    context.removeItems(context.items, "REMOVEALL");
  };

  const onCLickCancelHandler = () => {
    document.getElementById("Cart").classList.remove("opened");
    document.querySelector(".cart-overlay").classList.remove("opened");
  };

  return (
    <Fragment>
      <div className="cart-overlay"></div>
      <section id="Cart">
        <div className="cart-content">
          <div className="cart-header">
            <h4>shopping cart</h4>
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
              <h4>sub-total</h4>
              <h5>{context.totalAmount} items</h5>
            </div>
            <h4>${context.totalPrice}</h4>
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
