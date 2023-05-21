import { useSelector } from "react-redux";
import classes from "./Info.module.css";
import styles from "./ConfirmPage.module.css";
import ShoppingCartItem from "./ShoppingCartItem";

const ConfirmPage = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className={classes.container}>
      <h4>shopping cart</h4>
      {cart.length === 0 && <p>Your cart is currently empty.</p>}
      {cart.length > 0 && (
        <ul className={styles.items}>
          <li className={styles.header}>
            <span className={styles.product}>product</span>
            <span className={styles.price}>price</span>
            <span className={styles.quantity}>quantity</span>
            <span className={styles.total}>total</span>
          </li>
          {cart.map((item) => (
            <ShoppingCartItem data={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConfirmPage;
