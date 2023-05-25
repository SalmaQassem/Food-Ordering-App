import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error/Error";
import HomePage from "./components/HomePage/HomePage";
import Root from "./components/Roots/RootLayout";
import Checkout from "./components/Checkout/Checkout";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLandingData } from "./store/landingActions";
import { fetchMenuData } from "./store/menuActions";
import { fetchReviewsData } from "./store/reviewsActions";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";

const routes = createBrowserRouter([
  {
    path: "/Food-Ordering-App/",
    element: <HomePage />,
  },
  {
    path: "/Food-Ordering-App/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "Checkout", element: <Checkout /> },
      {
        path: "Menu",
        element: <Menu />,
      },
      { path: "About", element: <About /> },
      { path: "BookTable", element: <BookTable /> },
    ],
  },
]);

function App() {
  const landingDispatch = useDispatch();
  const menuDispatch = useDispatch();
  const reviewsDispatch = useDispatch();

  useEffect(() => {
    landingDispatch(fetchLandingData());
  }, [landingDispatch]);

  useEffect(() => {
    menuDispatch(fetchMenuData());
  }, [menuDispatch]);

  useEffect(() => {
    reviewsDispatch(fetchReviewsData());
  }, [reviewsDispatch]);

  return <RouterProvider router={routes} />;
}

export default App;
