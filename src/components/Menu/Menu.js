import "./Menu.css";
import { useContext, useState, useCallback, useEffect } from "react";
import CartContext from "../../CartContext/CartContext";
import Container from "../UI/Container";
import Header from "../UI/Header";
import AddButton from "../UI/AddButton";
import Button from "../UI/Button";
import { storage } from "../../firebase/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const context = useContext(CartContext);
  const [isActive, setIsActive] = useState("f1");
  const [activeCategory, setActiveCategory] = useState("all");
  const [error, setError] = useState();
  const [menu, setMenu] = useState([]);
  const [files, setFiles] = useState([]);

  const onClickFilterHandler = useCallback((e) => {
    setIsActive(e.target.id);
    setActiveCategory(e.target.textContent);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, "images/menuImages/");
      const result = await listAll(storageRef);
      let urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );
      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      let urlsArr = {};
      for (let i = 0; i < urls.length; i++) {
        urlsArr[`m${i + 1}`] = urls[i];
      }
      setFiles(urlsArr);
    };
    loadImages();
  }, []);

  const fetchMenuHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://feane-751cb-default-rtdb.firebaseio.com/menuList.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedMenu = [];
      for (const key in data) {
        loadedMenu.push({
          id: data[key].id,
          imageUrl: files[key],
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          category: data[key].category,
          amount: data[key].amount,
        });
      }
      setMenu(loadedMenu);
    } catch (error) {
      setError(error.message);
    }
  }, [files]);

  useEffect(() => {
    fetchMenuHandler();
  }, [fetchMenuHandler]);

  const onFormSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(e.target.id)) {
          const selectedItem = {
            id: menu[i].id,
            imageUrl: menu[i].imageUrl,
            name: menu[i].name,
            price: menu[i].price,
            amount: menu[i].amount,
          };
          context.addItems(selectedItem);
          break;
        }
      }
    },
    [context, menu]
  );

  return (
    <section id="Menu">
      <Container>
        <div className="heading">
          <Header>our menu</Header>
        </div>
        <ul className="menu-filters">
          <li
            id="f1"
            className={isActive === "f1" ? "active" : ""}
            onClick={onClickFilterHandler}
          >
            all
          </li>
          <li
            id="f2"
            className={isActive === "f2" ? "active" : ""}
            onClick={onClickFilterHandler}
          >
            burger
          </li>
          <li
            id="f3"
            className={isActive === "f3" ? "active" : ""}
            onClick={onClickFilterHandler}
          >
            pizza
          </li>
          <li
            id="f4"
            className={isActive === "f4" ? "active" : ""}
            onClick={onClickFilterHandler}
          >
            pasta
          </li>
          <li
            id="f5"
            className={isActive === "f5" ? "active" : ""}
            onClick={onClickFilterHandler}
          >
            fries
          </li>
        </ul>
        <div className="menu-items">
          {!error &&
            menu.map((item) => {
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
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <div className="price">
                      <h5>${item.price}</h5>
                      <AddButton type="submit" aria-label="add">
                        <FontAwesomeIcon icon={faCartShopping} />
                      </AddButton>
                    </div>
                  </div>
                </form>
              );
            })}
        </div>
        <Button className="viewBtn" href="#">
          view more
        </Button>
      </Container>
    </section>
  );
};

export default Menu;
