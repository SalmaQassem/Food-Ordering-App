import classes from "./Offers.module.css";
import React from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Offers = () => {
  const offers = useSelector((state) => state.offers.items);
  return (
    <section className={classes.offers}>
      <Container>
        <div className={classes.offersItems}>
          {offers.map((item) => {
            return (
              <div className={classes.item} key={item.id}>
                <div className={classes.imageContainer}>
                  <img src={item.imageUrl} alt="offer" loading="lazy" />
                </div>
                <div className={classes.description}>
                  <h2 className={classes.h2}>{item.title}</h2>
                  <h3 className={classes.h3}>
                    <span className={classes.percentage}>
                      {`${item.percentage}$`}
                      <span className={classes.off}> off</span>
                    </span>
                  </h3>
                  <Button
                    to="/Food-Ordering-App/Menu"
                    aria-label="Menu Page"
                    className={classes.button}
                  >
                    order now
                    <span className={classes.icon}>
                      <FaShoppingCart />
                    </span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Offers);
