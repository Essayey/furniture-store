import { baseApi } from "@/shared/api";
import { getAllCategoriesDtoResponse } from "./categoryDto";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<getAllCategoriesDtoResponse, void>({
      query: () => ({
        url: `/ca`,
      }),
    }),
  }),
});
