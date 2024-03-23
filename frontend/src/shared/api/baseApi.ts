import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CATEGORIES_TAG, PRODUCTS_TAG, PROPERTY_TAG } from "./tags";
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: [CATEGORIES_TAG, PROPERTY_TAG, PRODUCTS_TAG],
  endpoints: () => ({}),
});
