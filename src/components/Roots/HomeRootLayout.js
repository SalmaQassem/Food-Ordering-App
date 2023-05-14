import Background from "../Background/Background";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import Cart from "../Cart/Cart";
import { Outlet } from "react-router-dom";
import CartProvider from "../../CartContext/CartProvider";

const HomeRootLayout = () => {
  return (
    <>
      <Background class="">
        <CartProvider>
          <NavBar />
          <Cart />
        </CartProvider>
        <Landing />
      </Background>
      <Outlet />
    </>
  );
};

export default HomeRootLayout;
