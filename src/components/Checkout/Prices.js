import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";
const Prices = () => {
  const subTotal = useSelector((state) => state.cart.totalPrice);
  const shipping = subTotal === 0 ? 0 : 10;
  const tax = subTotal * 0.15;
  const total = subTotal + shipping + tax;
  return (
    <div className={classes.prices}>
      <div className={classes.item}>
        <h4 className={classes.title}>sub total</h4>
        <p className={classes.p}>{`$${subTotal}`}</p>
      </div>
      <div className={classes.item}>
        <h4 className={classes.title}>shipping</h4>
        <p className={classes.p}>{`$${shipping}`}</p>
      </div>
      <div className={classes.item}>
        <h4 className={classes.title}>tax</h4>
        <p className={classes.p}>{`$${tax.toFixed(2)}`}</p>
      </div>
      <div className={classes.item}>
        <h4>total</h4>
        <p>{`$${total.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Prices;
