import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { baseApi } from "@/shared/api";

export const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  });
  return store;
};
export const appStore = createStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
