import "./CartItem.css";
import { useCallback } from "react";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import RemoveButton from "../UI/RemoveButton";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const increaseHandler = useCallback(() => {
    dispatch(cartActions.addItems(props.data));
  }, [dispatch, props]);

  const onClickDecrease = useCallback(() => {
    dispatch(cartActions.decreaseItems(props.data));
  }, [dispatch, props]);

  const onClickRemoveHandler = useCallback(() => {
    dispatch(cartActions.removeItems(props.data));
  }, [dispatch, props]);

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={props.data.imageUrl} alt="" />
      </div>
      <p className="item-name">{props.data.name}</p>
      <div className="amount-buttons">
        <button onClick={onClickDecrease}>-</button>
        <p className="amount">{props.data.quantity}</p>
        <button onClick={increaseHandler}>+</button>
      </div>
      <div className="item-price">
        <p>${props.data.totalPrice}</p>
        <RemoveButton onClick={onClickRemoveHandler}>remove</RemoveButton>
      </div>
    </div>
  );
};

export default CartItem;
