import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import CartProvider from "../../CartContext/CartProvider";
import Background from "../Background/Background";

const Root = () => {
  return (
    <>
      <CartProvider>
        <Background class="sub">
          <NavBar />
        </Background>
        <Cart />
      </CartProvider>
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
