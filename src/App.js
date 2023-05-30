import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomeRoot from "./components/Roots/HomeRoot";
import HomePage from "./components/HomePage/HomePage";
import Error from "./components/Error/Error";
import Root from "./components/Roots/RootLayout";
import Checkout from "./components/Checkout/Checkout";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLandingData } from "./store/landingActions";
import { fetchOffersData } from "./store/offersActions";
import { fetchMenuData } from "./store/menuActions";
import { fetchReviewsData } from "./store/reviewsActions";

const routes = createBrowserRouter([
  {
    path: "/Food-Ordering-App/",
    element: <HomeRoot />,
    errorElement: <Error />,
    children: [{ index: true, element: <HomePage /> }],
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
  const offersDispatch = useDispatch();
  const menuDispatch = useDispatch();
  const reviewsDispatch = useDispatch();

  useEffect(() => {
    landingDispatch(fetchLandingData());
    offersDispatch(fetchOffersData());
    menuDispatch(fetchMenuData());
    reviewsDispatch(fetchReviewsData());
  }, [landingDispatch, offersDispatch, menuDispatch, reviewsDispatch]);
  return <RouterProvider router={routes} />;
}

export default App;
