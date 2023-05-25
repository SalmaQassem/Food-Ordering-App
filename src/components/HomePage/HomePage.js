import CartProvider from "../../CartContext/CartProvider";
import Background from "../Background/Background";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";
import Landing from "../Landing/Landing";
import Offers from "../Offers/Offers";
import Menu from "../Menu/Menu";
import About from "../About/About";
import BookTable from "../BookTable/BookTable";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <CartProvider>
        <Background>
          <NavBar />
          <Cart />
          <Landing />
        </Background>
      </CartProvider>
      <Offers />
      <Menu />
      <About />
      <BookTable />
      <Reviews />
      <Footer />
    </>
  );
};

export default HomePage;
