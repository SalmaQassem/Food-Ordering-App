import classes from "./MenuItems.module.css";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const MenuItems = (props) => {
  const menuItems = useSelector((state) => state.menu.items);
  return (
    <div className={classes.menuItems}>
      {menuItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            item={item}
            activeCategory={props.category}
            menu={menuItems}
          />
        );
      })}
    </div>
  );
};

export default MenuItems;
