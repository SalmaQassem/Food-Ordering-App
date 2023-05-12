import "./MenuItem.css";
import AddButton from "../UI/AddButton";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const MenuItem = (props) => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);

  const onFormSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const item = menuItems.find((obj) => {
        return obj.id === parseInt(e.target.id);
      });
      if (item) {
        const selectedItem = {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
        };
        dispatch(cartActions.addItems(selectedItem));
      }
    },
    [menuItems, dispatch]
  );

  return (
    <form
      className={
        props.activeCategory === props.item.category ||
        props.activeCategory === "all"
          ? "menu-item active"
          : "menu-item"
      }
      onSubmit={onFormSubmitHandler}
      id={props.item.id}
      key={props.item.id}
    >
      <div className="menu-image">
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className="item-desc">
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <div className="price">
          <h3>${props.item.price}</h3>
          <AddButton type="submit" aria-label="add">
            <FontAwesomeIcon icon={faCartShopping} />
          </AddButton>
        </div>
      </div>
    </form>
  );
};

export default MenuItem;
