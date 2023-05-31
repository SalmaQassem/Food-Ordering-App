import classes from "./Menu.module.css";
import Container from "../UI/Container";
import Header from "../UI/Header";
import MenuFilters from "./MenuFilters";
import MenuItems from "./MenuItems";
import Button from "../UI/Button";
import { useState, useCallback } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const onFilterHandler = useCallback((target) => {
    setActiveCategory(target.textContent);
  }, []);

  return (
    <section className={classes.menu}>
      <Container>
        <div className="heading">
          <Header>our menu</Header>
        </div>
        <MenuFilters onFilter={onFilterHandler} />
        <MenuItems category={activeCategory} />
        <Button to="/Food-Ordering-App/Menu" className={classes.viewBtn}>
          view more
        </Button>
      </Container>
    </section>
  );
};

export default Menu;
