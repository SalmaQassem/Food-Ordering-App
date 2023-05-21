import classes from "./Checkout.module.css";
import { useState } from "react";
import Container from "../UI/Container";
import StepsBar from "./StepsBar";
import BookButton from "../UI/BookButton";
import Coupon from "./Coupon";
import Shipping from "./Shipping";
import PersonalDetails from "./PersonalDetails";
import Prices from "./Prices";
import Payment from "./Payment";
import ConfirmPage from "./ConfirmPage";

const Checkout = () => {
  const [steps, setSteps] = useState(1);

  const clickNextHandler = () => {
    setSteps((prevState) => {
      return prevState + 1;
    });
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("confirm");
  };
  return (
    <section className={classes.checkout}>
      <Container>
        <StepsBar progress={steps} />
        <form className={classes.form}>
          <div className={classes.body}>
            {steps === 1 && <Shipping />}
            {steps === 2 && <PersonalDetails />}
            {steps === 3 && <Payment />}
            {steps === 4 && <ConfirmPage />}
            <div className={classes.summary}>
              <div className={classes.header}>
                <h4>order summary</h4>
                <p>The total cost includes the tax and the shipping charge.</p>
              </div>
              <Coupon />
              <Prices />
            </div>
          </div>
          <BookButton
            className={classes.submit}
            type="button"
            onClick={steps < 4 ? clickNextHandler : submitFormHandler}
          >
            {steps < 4 ? "next step" : "confirm"}
          </BookButton>
        </form>
      </Container>
    </section>
  );
};

export default Checkout;
