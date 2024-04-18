import { AboutPage } from "@/pages/about";
import { AdminPage, CategoriesPage, ProductsPage } from "@/pages/admin";
import { CartPage } from "@/pages/cart";
import { MainPage } from "@/pages/main";
import { Routes } from "@/shared/consts";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/baseLayout";
import { PropertiesPage } from "@/pages/admin/properties";
import { CategoryPage } from "@/pages/category";
import { ContactsPage } from "@/pages/contacts";
import { DeliveryPage } from "@/pages/delivery";
import { BuyersPage } from "@/pages/buyers/ui";
import { AuthPage } from "@/pages/auth";
import { useSelector } from "react-redux";


import { type JSX } from 'react'
import { selectUserAuthData } from "@/entities/user";
import { CatalogPage } from "@/pages/catalog";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(selectUserAuthData)

  if (!auth) {
    return <Navigate to={Routes.auth} replace={true}/>
  }

  return children
}


export const AppRouter = () => {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: Routes.catalog,
          element: <CatalogPage></CatalogPage>
        },
        {
          path: Routes.auth,
          element: <AuthPage />
        },
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
          element: (
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          )
        },
        {
          path: Routes.contacts,
          element: <ContactsPage />,
        },
        {
          path: Routes.delivery,
          element: <DeliveryPage />,
        },
        {
          path: Routes.buyers,
          element: <BuyersPage />,
        },
        {
          path: "/category/:categoryId",
          element: <CategoryPage />,
        },
        {
          path: Routes.admin,
          element:<AdminPage />,
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
