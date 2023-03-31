import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Offers from "./components/Offers/Offers";
import Menu from "./components/Menu/Menu";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Offers />
      <Menu />
    </div>
  );
}

export default App;
