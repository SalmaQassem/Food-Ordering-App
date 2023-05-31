import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/redux";
const App = lazy(() => import("./App"));
const Loading = lazy(() => import("./components/Loading/Loading"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Provider>
);
reportWebVitals();
