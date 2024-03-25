import { baseApi } from "@/shared/api";

import {
  AddPropertyToCategoryDtoRequest,
  AddPropertyToCategoryDtoResponse,
  AllCategoriesDtoRequset,
  AllCategoriesDtoResponse,
  CategoriesByIdDtoRequest,
  CategoriesByIdDtoResponse,
  CreateCategoriesDtoRequest,
  CreateCategoriesDtoResponse,
  DeleteCategoryByIdDtoRequest,
  DeleteCategoryByIdDtoResponse,
  DeletePropertyFromCategoryDtoRequest,
  DeletePropertyFromCategoryDtoResponse,
  FinalCategoriesDtoRequest,
  FinalCategoriesDtoResponse,
  PathCategoryByIdDtoRequest,
  PathCategoryByIdDtoResponse,
  SetIsFinalCategoryDtoRequest,
  SetIsFinalCategoryDtoResponse,
} from "./categoryDto";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allCategories: build.query<AllCategoriesDtoResponse, AllCategoriesDtoRequset>({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
      providesTags: ["CATEGORIES_TAG"],
    }),
    finalCategories: build.query<FinalCategoriesDtoResponse, FinalCategoriesDtoRequest>({
      query: () => ({
        url: `/categories/getFinalCategories`,
        method: "POST",
      }),
      providesTags: ["CATEGORIES_TAG"],
    }),
    categoriesById: build.query<CategoriesByIdDtoResponse, CategoriesByIdDtoRequest>({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
    createCategory: build.mutation<CreateCategoriesDtoResponse, CreateCategoriesDtoRequest>({
      query: ({ description, name, parentId }) => ({
        url: "/categories",
        method: "POST",
        body: { description, name, parentId },
      }),
      invalidatesTags: ["CATEGORIES_TAG"],
    }),
    pathCategoryById: build.mutation<PathCategoryByIdDtoResponse, PathCategoryByIdDtoRequest>({
      query: ({ id, description, name, parentId }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: { description, name, parentId },
      }),
      invalidatesTags: ["CATEGORIES_TAG"],
    }),
    deleteCategoryById: build.mutation<DeleteCategoryByIdDtoResponse, DeleteCategoryByIdDtoRequest>(
      {
        query: ({ id }) => ({
          url: `/categories/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["CATEGORIES_TAG"],
      },
    ),
    addPropertyToCategory: build.mutation<
      AddPropertyToCategoryDtoResponse,
      AddPropertyToCategoryDtoRequest
    >({
      query: ({ categoryId, propertyId }) => ({
        url: `/categories/addPropertyToCategory/${categoryId}/${propertyId}`,
        method: "PUT",
        body: { categoryId, propertyId },
      }),
      invalidatesTags: ["CATEGORIES_TAG", "PROPERTY_CATEGORY_TAG"],
    }),
    setIsFinalCategory: build.mutation<SetIsFinalCategoryDtoResponse, SetIsFinalCategoryDtoRequest>(
      {
        query: ({ id, isFinal }) => ({
          url: `/categories/setIsFinal/${id}`,
          method: "PUT",
          body: { isFinal },
        }),
        invalidatesTags: ["CATEGORIES_TAG"],
      },
    ),
    removePropertyFromCategory: build.mutation<
      DeletePropertyFromCategoryDtoResponse,
      DeletePropertyFromCategoryDtoRequest
    >({
      query: ({ categoryId, propertyId }) => ({
        url: `/categories/removePropertyFromCategory/${categoryId}/${propertyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CATEGORIES_TAG", "PROPERTY_CATEGORY_TAG"],
    }),
  }),
});
export const {
  useAllCategoriesQuery,
  useCategoriesByIdQuery,
  useCreateCategoryMutation,
  usePathCategoryByIdMutation,
  useDeleteCategoryByIdMutation,
  useAddPropertyToCategoryMutation,
  useRemovePropertyFromCategoryMutation,
  useFinalCategoriesQuery,
  useSetIsFinalCategoryMutation,
  useLazyFinalCategoriesQuery,
} = categoryApi;
