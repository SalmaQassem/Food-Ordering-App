import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Offers from "./components/Offers/Offers";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/menuActions";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  return (
    <div className="App">
      <HomePage />
      <Offers />
      <Menu />
      <About />
      <BookTable />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
