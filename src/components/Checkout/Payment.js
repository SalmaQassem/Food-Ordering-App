import classes from "./Info.module.css";
import styles from "./Payment.module.css";
import { ReactComponent as MastercardLogo } from "../../images/mastercard.svg";
import { ReactComponent as VisaLogo } from "../../images/visa.svg";
const Payment = () => {
  return (
    <div className={classes.container}>
      <h4>payment details</h4>
      <div className={styles.info}>
        <div className={styles.inputs}>
          <button className={styles.button} type="button">
            cash on delivery
          </button>
          <button className={styles.button} type="button">
            <MastercardLogo className={styles.svg} />
          </button>
          <button className={styles.button} type="button">
            <VisaLogo className={styles.svg} />
          </button>
        </div>
        <div className={styles.inputs}>
          <div className={classes.inputContainer}>
            <label className={classes.label}>name on card</label>
            <input className={classes.input} type="text" />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>card number</label>
            <input className={classes.input} type="number" />
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={classes.inputContainer}>
            <label className={classes.label}>expiry date</label>
            <input className={classes.input} type="number" />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>CVV / CVC</label>
            <input className={classes.input} type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
