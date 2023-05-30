import styles from "./ShoppingCartItem.module.css";
import modules from "../Cart/CartItem.module.css";
import classes from "./ConfirmPage.module.css";
import RemoveButton from "../UI/RemoveButton";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useCallback } from "react";

const ShoppingCartItem = (props) => {
  const dispatch = useDispatch();

  const clickDecreaseHandler = useCallback(() => {
    dispatch(cartActions.decreaseItems(props.data));
  }, [dispatch, props]);
  const clickIncreaseHandler = useCallback(() => {
    dispatch(cartActions.addItems(props.data));
  }, [dispatch, props]);
  const clickRemoveHandler = useCallback(() => {
    dispatch(cartActions.removeItems(props.data));
  }, [dispatch, props]);
  return (
    <li className={classes.item}>
      <img src={props.data.imageUrl} alt="" className={styles.tempImg}></img>
      <div className={styles.info}>
        <div className={classes.product}>
          <img src={props.data.imageUrl} alt="" className={styles.img}></img>
          <span className={styles.title}>{props.data.name}</span>
        </div>
        <span className={classes.price}>{`$${props.data.price}`}</span>
        <div className={classes.quantity}>
          <div className={styles.box}>
            <button
              type="button"
              className={modules.button}
              onClick={clickDecreaseHandler}
            >
              -
            </button>
            <span>{props.data.quantity}</span>
            <button
              type="button"
              className={modules.button}
              onClick={clickIncreaseHandler}
            >
              +
            </button>
          </div>
          <RemoveButton
            type="button"
            className={styles.remove}
            onClick={clickRemoveHandler}
          >
            <div className={styles.icon}>
              <IoClose />
            </div>
            remove
          </RemoveButton>
        </div>
        <span className={classes.total}>{`$${props.data.totalPrice}`}</span>
      </div>
    </li>
  );
};

export default ShoppingCartItem;
