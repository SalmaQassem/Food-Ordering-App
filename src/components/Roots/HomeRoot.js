import CartProvider from "../../CartContext/CartProvider";
import Background from "../Background/Background";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import Landing from "../Landing/Landing";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const HomeRoot = () => {
  return (
    <>
      <CartProvider>
        <Background>
          <NavBar />
          <Cart />
          <Landing />
        </Background>
      </CartProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeRoot;
