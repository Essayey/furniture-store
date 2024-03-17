import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    baseUrl: import.meta.VITE_APP_API,

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  reducerPath: "api",
  endpoints: () => ({}),
});
