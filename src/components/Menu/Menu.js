import "./Menu.css";
import { useContext, useState, useCallback, useEffect } from "react";
import CartContext from "../../CartContext/CartContext";
import Container from "../UI/Container";
import AddButton from "../UI/AddButton";
import { storage } from "../../firebase/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [error, setError] = useState();
  const [files, setFiles] = useState([]);
  const [menu, setMenu] = useState([]);

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

  const context = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("all");

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

  const onClickFilterHandler = useCallback((e) => {
    const categories = document.querySelectorAll("#Menu .menu-filters li");
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove("active");
    }
    e.target.classList.add("active");
    setActiveCategory(e.target.textContent);
  }, []);

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
