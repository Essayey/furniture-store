import { baseApi } from "@/shared/api";
import {
  getAllCategoriesDtoResponse,
  getCategoriesByIdDtoResponse,
  getCategoriesByIdDtoRequest,
} from "./categoryDto";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<getAllCategoriesDtoResponse, void>({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
    }),
    getCategoriesById: build.query<getCategoriesByIdDtoResponse, getCategoriesByIdDtoRequest>({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllCategoriesQuery, useGetCategoriesByIdQuery, useLazyGetAllCategoriesQuery } =
  categoryApi;
