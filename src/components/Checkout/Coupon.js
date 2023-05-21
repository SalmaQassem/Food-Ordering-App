import classes from "./Coupon.module.css";

const Coupon = () => {
  return (
    <div className={classes.coupon}>
      <p>gift card / discount code</p>
      <div className={classes.box}>
        <input type="text" />
        <button className={classes.apply} type="button">
          apply
        </button>
      </div>
    </div>
  );
};

export default Coupon;
