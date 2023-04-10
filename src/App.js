import "./App.css";
import CartProvider from "./CartContext/CartProvider";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import Offers from "./components/Offers/Offers";
import Menu from "./components/Menu/Menu";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <HomePage />
        <Cart />
        <Offers />
        <Menu />
      </div>
    </CartProvider>
  );
}

export default App;
