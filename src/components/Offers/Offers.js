import classes from "./Offers.module.css";
import React from "react";
import offers1 from "../../images/o1.webp";
import offers2 from "../../images/o2.webp";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Offers = () => {
  return (
    <section className={classes.offers}>
      <Container>
        <div className={classes.offersItems}>
          <div className={classes.item}>
            <div className={classes.imageContainer}>
              <img src={offers1} alt="offer" loading="lazy" />
            </div>
            <div className={classes.description}>
              <h2 className={classes.h2}>tasty thursdays</h2>
              <h3 className={classes.h3}>
                <span className={classes.percentage}>
                  20%<span className={classes.off}> off</span>
                </span>
              </h3>
              <Button
                to="Menu"
                aria-label="Menu Page"
                className={classes.button}
              >
                order now
                <span className={classes.icon}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </Button>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.imageContainer}>
              <img src={offers2} alt="offer" loading="lazy" />
            </div>
            <div className={classes.description}>
              <h2 className={classes.h2}>pizza days</h2>
              <h3 className={classes.h3}>
                <span className={classes.percentage}>
                  15%<span className={classes.off}> off</span>
                </span>
              </h3>
              <Button
                to="Menu"
                aria-label="Menu Page"
                className={classes.button}
              >
                order now
                <span className={classes.icon}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Offers);
