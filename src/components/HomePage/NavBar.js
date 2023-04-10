import "./NavBar.css";
import { useContext } from "react";
import CartContext from "../../CartContext/CartContext";
import Container from "../UI/Container";
import Button from "../UI/Button";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const NavBar = () => {
  const context = useContext(CartContext);

  const [isTogglerOpened, setIsTogglerOpened] = useState(false);
  const onClickTogglerHandler = () => {
    setIsTogglerOpened(!isTogglerOpened);
  };

  useEffect(() => {
    if (isTogglerOpened) {
      document
        .querySelector(".navbar-items .collapse-menu")
        .classList.add("opened");
      document.querySelector(".navbar-items .toggler").classList.add("opened");
    } else {
      document
        .querySelector(".navbar-items .collapse-menu")
        .classList.remove("opened");
      document
        .querySelector(".navbar-items .toggler")
        .classList.remove("opened");
    }
  }, [isTogglerOpened]);

  const onCartClickHandler = () => {
    document.getElementById("Cart").classList.add("opened");
    document.querySelector(".cart-overlay").classList.add("opened");
  };

  return (
    <div className="navbar">
      <Container>
        <nav className="navbar-items">
          <a href="#Home" className="logo">
            <span>feane</span>
          </a>
          <div className="toggler" onClick={onClickTogglerHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="collapse-menu">
            <ul className="links-list">
              <li>
                <a href="#Home">home</a>
              </li>
              <li>
                <a href="#Menu">menu</a>
              </li>
              <li>
                <a href="#About">about</a>
              </li>
              <li>
                <a href="#BookTable">book table</a>
              </li>
            </ul>
            <div className="user-options">
              <ul className="side-list">
                <li>
                  <a href="#Profile">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
                <li
                  className="cart"
                  data-before={
                    context.totalAmount > 0 ? context.totalAmount : ""
                  }
                >
                  <a href="#Cart" onClick={onCartClickHandler}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </li>
                <li>
                  <a href="#Search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>
              </ul>
              <Button href="#Shop">order online</Button>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};
export default NavBar;
