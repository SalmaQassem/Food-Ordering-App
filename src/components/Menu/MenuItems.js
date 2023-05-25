import classes from "./MenuItems.module.css";
import MenuItem from "./MenuItem";

const MenuItems = (props) => {
  return (
    <div className={classes.menuItems}>
      {props.menuItems.map((item) => {
        return (
          <MenuItem key={item.id} item={item} activeCategory={props.category} />
        );
      })}
    </div>
  );
};

export default MenuItems;
