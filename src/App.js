import "./App.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLandingData } from "./store/landingActions";
import { fetchOffersData } from "./store/offersActions";
import { fetchMenuData } from "./store/menuActions";
import { fetchReviewsData } from "./store/reviewsActions";
import "./fonts/DancingScript-Regular.ttf";
import "./fonts/DancingScript-Medium.ttf";
import "./fonts/DancingScript-SemiBold.ttf";
import "./fonts/DancingScript-Bold.ttf";
const HomeRoot = lazy(() => import("./components/Roots/HomeRoot"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const Error = lazy(() => import("./components/Error/Error"));
const Root = lazy(() => import("./components/Roots/RootLayout"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Menu = lazy(() => import("./components/Menu/Menu"));
const About = lazy(() => import("./components/About/About"));
const BookTable = lazy(() => import("./components/BookTable/BookTable"));
const Loading = lazy(() => import("./components/Loading/Loading"));

const routes = createBrowserRouter([
  {
    path: "/Feane/",
    element: (
      <Suspense fallback={<Loading />}>
        <HomeRoot />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/Feane/",
    element: (
      <Suspense fallback={<Loading />}>
        <Root />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "Checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "Menu",
        element: (
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "About",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "BookTable",
        element: (
          <Suspense fallback={<Loading />}>
            <BookTable />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const landingDispatch = useDispatch();
  const offersDispatch = useDispatch();
  const menuDispatch = useDispatch();
  const reviewsDispatch = useDispatch();
  const returnValue = isLoading ? (
    <Loading />
  ) : (
    <RouterProvider router={routes} />
  );
  useEffect(() => {
    setIsLoading(true);
    landingDispatch(fetchLandingData());
    offersDispatch(fetchOffersData());
    menuDispatch(fetchMenuData());
    reviewsDispatch(fetchReviewsData());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [landingDispatch, offersDispatch, menuDispatch, reviewsDispatch]);

  return returnValue;
}

export default App;
