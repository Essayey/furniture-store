import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./appRouter";
import { useLazyCheckQuery } from "@/entities/user";
import { useEffect } from "react";

export const AppEntry = () => {
  const [check, { isLoading }] = useLazyCheckQuery()

  useEffect(() => {
    void check()
  }, [])

  if (isLoading) return null

  return (
      <RouterProvider router={AppRouter()} />
  );
};
