import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CATEGORIES_TAG, PRODUCTS_TAG, PROPERTY_CATEGORY_TAG, PROPERTY_TAG } from "./tags";
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
  }),
  reducerPath: "api",
  tagTypes: [CATEGORIES_TAG, PROPERTY_TAG, PRODUCTS_TAG, PROPERTY_CATEGORY_TAG],
  endpoints: () => ({}),
});
