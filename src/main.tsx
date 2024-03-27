import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Page404,
  PageBasket,
  PageContacts,
  PageFavorites,
  PageHeadPhone,
  PageTerms,
} from "./pages";
import { Provider } from "react-redux";
import store from "./store/store";
import { Payment } from "./shared/components/payment";
import { ProductInfo } from "./shared/components/product-information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHeadPhone />,
    errorElement: <Page404 />,
    children: [
      {
        path: ":id",
        element: <ProductInfo />,
      },
    ],
  },
  {
    path: "/basket",
    element: <PageBasket />,
    children: [
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/contacts",
    element: <PageContacts />,
  },
  {
    path: "/favorites",
    element: <PageFavorites />,
  },
  {
    path: "/terms of service",
    element: <PageTerms />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
