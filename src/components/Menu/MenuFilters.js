import "./MenuFilters.css";
import { useState } from "react";

const MenuFilters = (props) => {
  const [isActive, setIsActive] = useState("f1");

  const clickFilterHandler = (e) => {
    setIsActive(e.target.id);
    props.onFilter(e.target);
  };
  return (
    <ul className="menu-filters">
      <li
        id="f1"
        className={isActive === "f1" ? "active" : ""}
        onClick={clickFilterHandler}
      >
        all
      </li>
      <li
        id="f2"
        className={isActive === "f2" ? "active" : ""}
        onClick={clickFilterHandler}
      >
        burger
      </li>
      <li
        id="f3"
        className={isActive === "f3" ? "active" : ""}
        onClick={clickFilterHandler}
      >
        pizza
      </li>
      <li
        id="f4"
        className={isActive === "f4" ? "active" : ""}
        onClick={clickFilterHandler}
      >
        pasta
      </li>
      <li
        id="f5"
        className={isActive === "f5" ? "active" : ""}
        onClick={clickFilterHandler}
      >
        fries
      </li>
    </ul>
  );
};

export default MenuFilters;
