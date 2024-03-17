import { AboutPage } from "@/pages/about";
import { CartPage } from "@/pages/cart";
import { MainPage } from "@/pages/main";
import { Routes } from "@/shared/consts";
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/baseLayout";

export const AppRouter = () => {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: Routes.main,
          element: <MainPage />,
        },
        {
          path: Routes.about,
          element: <AboutPage />,
        },
        {
          path: Routes.cart,
          element: <CartPage />,
        },
        {
          path: Routes.admin,
          // element: <CartPage />,
        },
      ],
    },
  ]);
};
