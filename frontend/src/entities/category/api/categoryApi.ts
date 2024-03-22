import { baseApi } from "@/shared/api";
import {
  allCategoriesDtoResponse,
  categoriesByIdDtoRequest,
  categoriesByIdDtoResponse,
  createCategoriesDtoRequest,
  pathCategoryByIdDtoRequest,
  pathCategoryByIdDtoResponse,
} from "./categoryDto";
import { CATEGORIES_TAG } from "@/shared/api/tags";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allCategories: build.query<allCategoriesDtoResponse, void>({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
      providesTags: [CATEGORIES_TAG],
    }),

    categoriesById: build.query<categoriesByIdDtoResponse, categoriesByIdDtoRequest>({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
    createCategories: build.mutation<void, createCategoriesDtoRequest>({
      query: ({ description, name, parentId }) => ({
        url: "/categories",
        method: "POST",
        body: { description, name, parentId },
      }),
      invalidatesTags: [CATEGORIES_TAG],
    }),
    pathCategoryById: build.mutation<pathCategoryByIdDtoResponse, pathCategoryByIdDtoRequest>({
      query: ({ id, description, name, parentId }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: { description, name, parentId },
      }),
      invalidatesTags: [CATEGORIES_TAG],
    }),
  }),
});
export const {
  useAllCategoriesQuery,
  useCategoriesByIdQuery,
  useCreateCategoriesMutation,
  usePathCategoryByIdMutation,
} = categoryApi;
