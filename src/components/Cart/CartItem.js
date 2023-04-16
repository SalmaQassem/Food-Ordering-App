import "./CartItem.css";
import { useCallback } from "react";
import RemoveButton from "../UI/RemoveButton";

const CartItem = (props) => {
  const onClickIncrease = useCallback(() => {
    props.onAddItem(props.data);
  }, [props]);

  const onClickDecrease = useCallback(() => {
    props.onRemoveItem(props.data, "DEC");
  }, [props]);

  const onClickRemoveHandler = useCallback(() => {
    props.onRemoveItem(props.data, "REMOVE");
  }, [props]);

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={props.data.imageUrl} alt="" />
      </div>
      <p className="item-name">{props.data.name}</p>
      <div className="amount-buttons">
        <button onClick={onClickDecrease}>-</button>
        <p className="amount">{props.data.amount}</p>
        <button onClick={onClickIncrease}>+</button>
      </div>
      <div className="item-price">
        <p>${props.data.amount * props.data.price}</p>
        <RemoveButton onClick={onClickRemoveHandler}>remove</RemoveButton>
      </div>
    </div>
  );
};

export default CartItem;
