import classes from "./MenuFilters.module.css";
import { useState } from "react";

const MenuFilters = (props) => {
  const [isActive, setIsActive] = useState("f1");

  const clickFilterHandler = (e) => {
    setIsActive(e.target.id);
    props.onFilter(e.target);
  };
  return (
    <ul className={classes.filters}>
      <li
        id="f1"
        className={
          isActive === "f1"
            ? `${classes.filter} ${classes.active}`
            : classes.filter
        }
        onClick={clickFilterHandler}
      >
        all
      </li>
      <li
        id="f2"
        className={
          isActive === "f2"
            ? `${classes.filter} ${classes.active}`
            : classes.filter
        }
        onClick={clickFilterHandler}
      >
        burger
      </li>
      <li
        id="f3"
        className={
          isActive === "f3"
            ? `${classes.filter} ${classes.active}`
            : classes.filter
        }
        onClick={clickFilterHandler}
      >
        pizza
      </li>
      <li
        id="f4"
        className={
          isActive === "f4"
            ? `${classes.filter} ${classes.active}`
            : classes.filter
        }
        onClick={clickFilterHandler}
      >
        pasta
      </li>
      <li
        id="f5"
        className={
          isActive === "f5"
            ? `${classes.filter} ${classes.active}`
            : classes.filter
        }
        onClick={clickFilterHandler}
      >
        fries
      </li>
    </ul>
  );
};

export default MenuFilters;
