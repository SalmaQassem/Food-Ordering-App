import "./CartItem.css";
import RemoveButton from "../UI/RemoveButton";

const CartItem = (props) => {
  const onClickIncrease = () => {
    props.onAddItem(props.data);
  };

  const onClickDecrease = () => {
    props.onRemoveItem(props.data, "DEC");
  };

  const onClickRemoveHandler = () => {
    props.onRemoveItem(props.data, "REMOVE");
  };

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
