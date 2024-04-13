import { AboutPage } from "@/pages/about";
import { AdminPage, CategoriesPage, ProductsPage } from "@/pages/admin";
import { CartPage } from "@/pages/cart";
import { MainPage } from "@/pages/main";
import { Routes } from "@/shared/consts";
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/baseLayout";
import { PropertiesPage } from "@/pages/admin/properties";
import { CategoryPage } from "@/pages/category";

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
          path: "/category/:categoryId",
          element: <CategoryPage />,
        },
        {
          path: Routes.admin,
          element: <AdminPage />,
          children: [
            {
              path: Routes.categories,
              element: <CategoriesPage />,
            },
            {
              path: Routes.products,
              element: <ProductsPage />,
            },
            {
              path: Routes.properties,
              element: <PropertiesPage />,
            },
          ],
        },
      ],
    },
  ]);
};
