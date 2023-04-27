import "./HomePage.css";
import { useState } from "react";
import background from "../../images/hero-bg.webp";
import NavBar from "./NavBar";
import Cart from "../Cart/Cart";
import Landing from "./Landing";

const HomePage = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const isCartOpenedHandler = () => {
    setIsCartOpened(true);
  };
  const isCartClosedHandler = () => {
    setIsCartOpened(false);
  };
  return (
    <section className="home" id="Home">
      <div className="bg-Image">
        <img src={background} alt="" />
      </div>
      <NavBar cartOpened={isCartOpenedHandler} />
      <Cart cartState={isCartOpened} cartClosed={isCartClosedHandler} />
      <Landing />
    </section>
  );
};
export default HomePage;
