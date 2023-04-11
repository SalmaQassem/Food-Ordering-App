import "./Menu.css";
import { useContext, useState } from "react";
import CartContext from "../../CartContext/CartContext";
import Container from "../UI/Container";
import AddButton from "../UI/AddButton";
import menu1 from "../../images/f1.webp";
import menu2 from "../../images/f2.webp";
import menu3 from "../../images/f3.webp";
import menu4 from "../../images/f4.webp";
import menu5 from "../../images/f5.webp";
import menu6 from "../../images/f6.webp";
import menu7 from "../../images/f7.webp";
import menu8 from "../../images/f8.webp";
import menu9 from "../../images/f9.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    id: 1,
    imageUrl: menu1,
    name: "delicious pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 20,
    amount: 1,
    category: "pizza",
  },
  {
    id: 2,
    imageUrl: menu2,
    name: "delicious burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 15,
    amount: 1,
    category: "burger",
  },
  {
    id: 3,
    imageUrl: menu3,
    name: "delicious pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 17,
    amount: 1,
    category: "pizza",
  },
  {
    id: 4,
    imageUrl: menu4,
    name: "delicious pasta",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 18,
    amount: 1,
    category: "pasta",
  },
  {
    id: 5,
    imageUrl: menu5,
    name: "french fries",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 10,
    amount: 1,
    category: "fries",
  },
  {
    id: 6,
    imageUrl: menu6,
    name: "delicious pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 15,
    amount: 1,
    category: "pizza",
  },
  {
    id: 7,
    imageUrl: menu7,
    name: "tasty burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 12,
    amount: 1,
    category: "burger",
  },
  {
    id: 8,
    imageUrl: menu8,
    name: "tasty burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 14,
    amount: 1,
    category: "burger",
  },
  {
    id: 9,
    imageUrl: menu9,
    name: "delicious pasta",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 10,
    amount: 1,
    category: "pasta",
  },
];

const Menu = () => {
  const context = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("all");
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].id === parseInt(e.target.id)) {
        const selectedItem = {
          id: menuItems[i].id,
          imageUrl: menuItems[i].imageUrl,
          name: menuItems[i].name,
          price: menuItems[i].price,
          amount: menuItems[i].amount,
        };
        context.addItems(selectedItem);
        break;
      }
    }
  };

  const onClickFilterHandler = (e) => {
    const categories = document.querySelectorAll("#Menu .menu-filters li");
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove("active");
    }
    e.target.classList.add("active");
    setActiveCategory(e.target.textContent);
  };

  return (
    <section id="Menu">
      <Container>
        <div className="heading">
          <h2>our menu</h2>
        </div>
        <ul className="menu-filters">
          <li className="active" onClick={onClickFilterHandler}>
            all
          </li>
          <li onClick={onClickFilterHandler}>burger</li>
          <li onClick={onClickFilterHandler}>pizza</li>
          <li onClick={onClickFilterHandler}>pasta</li>
          <li onClick={onClickFilterHandler}>fries</li>
        </ul>
        <div className="menu-items">
          {menuItems.map((item) => {
            return (
              <form
                className={
                  activeCategory === item.category || activeCategory === "all"
                    ? "menu-item active"
                    : "menu-item"
                }
                onSubmit={onFormSubmitHandler}
                id={item.id}
                key={item.id}
              >
                <div className="menu-image">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="item-desc">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <div className="price">
                    <h6>${item.price}</h6>
                    <AddButton type="submit">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </AddButton>
                  </div>
                </div>
              </form>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Menu;
