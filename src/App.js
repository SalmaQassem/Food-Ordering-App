import "./App.css";
import CartProvider from "./CartContext/CartProvider";
import HomePage from "./components/HomePage/HomePage";
import Offers from "./components/Offers/Offers";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import Reviews from "./components/Reviews/Reviews";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <HomePage />
        <Offers />
        <Menu />
        <About />
        <BookTable />
        <Reviews />
      </div>
    </CartProvider>
  );
}

export default App;
