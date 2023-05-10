import "./NavBar.css";
import { useContext, useCallback } from "react";
import CartContext from "../../CartContext/CartContext";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = (props) => {
  const context = useContext(CartContext);
  const [isTogglerOpened, setIsTogglerOpened] = useState(false);

  const onClickTogglerHandler = useCallback(() => {
    setIsTogglerOpened((prevToggler) => {
      return !prevToggler;
    });
  }, []);

  const onCartClickHandler = useCallback(() => {
    props.cartOpened();
  }, [props]);

  return (
    <div className="navbar">
      <Container>
        <nav className="navbar-items">
          <a href="#Home" aria-label="Home Page" className="logo">
            <span>feane</span>
          </a>
          <div
            className={isTogglerOpened ? "toggler opened" : "toggler"}
            onClick={onClickTogglerHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={
              isTogglerOpened ? "collapse-menu opened" : "collapse-menu"
            }
          >
            <ul className="links-list">
              <li>
                <a href="#Home" aria-label="Home Page">
                  home
                </a>
              </li>
              <li>
                <a href="#Menu" aria-label="Menu Page">
                  menu
                </a>
              </li>
              <li>
                <a href="#About" aria-label="About Page">
                  about
                </a>
              </li>
              <li>
                <a href="#Book" aria-label="BookTable Page">
                  book table
                </a>
              </li>
            </ul>
            <div className="user-options">
              <ul className="side-list">
                <li>
                  <a href="#Profile" aria-label="Profile Page">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
                <li
                  className="cart"
                  data-before={
                    context.totalAmount > 0 ? context.totalAmount : ""
                  }
                >
                  <a
                    href="#Cart"
                    aria-label="Cart Page"
                    onClick={onCartClickHandler}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </li>
                <li>
                  <a href="#Search" aria-label="Search Page">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>
              </ul>
              <Button href="#Menu" aria-label="Order Button">
                order online
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};
export default NavBar;
