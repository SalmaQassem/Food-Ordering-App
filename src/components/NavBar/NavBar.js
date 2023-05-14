import classes from "./NavBar.module.css";
import { useCallback, useContext } from "react";
import { useSelector } from "react-redux";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartContext from "../../CartContext/CartContext";

const NavBar = () => {
  let context = useContext(CartContext);
  const amount = useSelector((state) => state.cart.totalAmount);
  const [isTogglerOpened, setIsTogglerOpened] = useState(false);

  const onClickTogglerHandler = useCallback(() => {
    setIsTogglerOpened((prevToggler) => {
      return !prevToggler;
    });
  }, []);

  const linkClickHandler = () => {
    if (isTogglerOpened) {
      setIsTogglerOpened(false);
    }
  };

  const onCartClickHandler = () => {
    context.setIsCartOpened(true);
  };

  return (
    <div className={classes.navbar}>
      <Container>
        <nav className={classes.items}>
          <Link
            to="/Food-Ordering-App/"
            aria-label="Home Page"
            className={classes.logo}
          >
            <span>feane</span>
          </Link>
          <div
            className={
              isTogglerOpened
                ? `${classes.toggler} ${classes.open}`
                : classes.toggler
            }
            onClick={onClickTogglerHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={
              isTogglerOpened
                ? `${classes.collapse} ${classes.opened}`
                : classes.collapse
            }
          >
            <ul className={classes.links}>
              <li>
                <NavLink
                  to="/Food-Ordering-App/"
                  aria-label="Home Page"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                  onClick={linkClickHandler}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Menu"
                  aria-label="Menu Page"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={linkClickHandler}
                >
                  menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="About"
                  aria-label="About Page"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={linkClickHandler}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="BookTable"
                  aria-label="BookTable Page"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={linkClickHandler}
                >
                  book table
                </NavLink>
              </li>
            </ul>
            <div className={classes.user}>
              <ul className={classes.sideList}>
                <li>
                  <Link to="/Food-Ordering-App/" aria-label="Profile Page">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
                <li className={classes.cart} data-before={amount}>
                  <span aria-label="Cart Page" onClick={onCartClickHandler}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                </li>
                <li>
                  <Link to="/Food-Ordering-App/" aria-label="Search Page">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Link>
                </li>
              </ul>
              <Button to="Menu" aria-label="Order Button">
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
