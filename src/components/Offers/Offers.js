import "./Offers.css";
import React from "react";
import offers1 from "../../images/o1.webp";
import offers2 from "../../images/o2.webp";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Offers = () => {
  return (
    <section id="Offers">
      <Container>
        <div className="offers-items">
          <div className="item">
            <div className="image">
              <img src={offers1} alt="" />
            </div>
            <div className="item-description">
              <h2>tasty thursdays</h2>
              <h3>
                <span>20%</span> off
              </h3>
              <Button className="offer-btn">
                order now
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src={offers2} alt="" />
            </div>
            <div className="item-description">
              <h2>pizza days</h2>
              <h3>
                <span>15%</span> off
              </h3>
              <Button className="offer-btn">
                order now
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Offers);
