import "./Menu.css";
import Container from "../UI/Container";
import Button from "../UI/Button";
import menu1 from "../../images/f1.webp";
import menu2 from "../../images/f2.webp";
import menu3 from "../../images/f3.webp";
import menu4 from "../../images/f4.webp";
import menu5 from "../../images/f5.webp";
import menu6 from "../../images/f6.webp";
import menu7 from "../../images/f7.webp";
import menu8 from "../../images/f8.webp";
import menu9 from "../../images/f9.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <section id="Menu">
      <Container>
        <div className="heading">
          <h2>our menu</h2>
        </div>
        <ul className="menu-filters">
          <li className="active">all</li>
          <li>burger</li>
          <li>pizza</li>
          <li>pasta</li>
          <li>fries</li>
        </ul>
        <div className="menu-items">
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu1} alt="" />
            </div>
            <div className="item-desc">
              <h5>delicious pizza</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$20</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu2} alt="" />
            </div>
            <div className="item-desc">
              <h5>delicious burger</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$15</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu3} alt="" />
            </div>
            <div className="item-desc">
              <h5>delicious pizza</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$17</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu4} alt="" />
            </div>
            <div className="item-desc">
              <h5>delicious pasta</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$18</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu5} alt="" />
            </div>
            <div className="item-desc">
              <h5>french fries</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$10</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu6} alt="" />
            </div>
            <div className="item-desc">
              <h5>delicious pizza</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$15</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu7} alt="" />
            </div>
            <div className="item-desc">
              <h5>tasty burger</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$12</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu8} alt="" />
            </div>
            <div className="item-desc">
              <h5>tasty burger</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$14</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-image">
              <img src={menu9} alt="" />
            </div>
            <div className="item-desc">
              <h5>delicious pasta</h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                velit, magnam voluptatem repellendus sed eaque
              </p>
              <div className="price">
                <h6>$10</h6>
                <Button href="#Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Menu;
