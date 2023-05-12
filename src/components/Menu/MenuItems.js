import "./MenuItems.css";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const MenuItems = (props) => {
  const menuItems = useSelector((state) => state.menu.items);
  return (
    <div className="menu-items">
      {menuItems.map((item) => {
        return (
          <MenuItem key={item.id} item={item} activeCategory={props.category} />
        );
      })}
    </div>
  );
};

export default MenuItems;
