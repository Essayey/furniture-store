import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./appRouter";
import { Provider } from "react-redux";
import { appStore } from "./providers";

export const AppEntry = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={AppRouter()} />
    </Provider>
  );
};
