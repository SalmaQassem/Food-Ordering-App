import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Checkout from "./components/Checkout/Checkout";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/menuActions";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomeRootLayout from "./components/Roots/HomeRootLayout";
import Root from "./components/Roots/RootLayout";

const router = createBrowserRouter([
  {
    path: "/Food-Ordering-App/",
    element: <HomeRootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/Food-Ordering-App/",
    element: <Root />,
    children: [
      { path: "Checkout", element: <Checkout /> },
      { path: "Menu", element: <Menu /> },
      { path: "About", element: <About /> },
      { path: "BookTable", element: <BookTable /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
