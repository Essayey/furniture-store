import { baseApi } from "@/shared/api";
import {
  AllProductsDtoRequest,
  AllProductsDtoResponse,
  CreateProductDtoRequest,
  CreateProductDtoResponse,
  DeleteProductByIdDtoRequest,
  DeleteProductByIdDtoResponse,
  PathProductByIdDtoRequest,
  PathProductByIdDtoResponse,
  ProductByIdDtoRequest,
  ProductByIdDtoResponse,
  UpdateProductPropertyDtoRequest,
  UpdateProductPropertyDtoResponse,
} from "./productsDto";
import { createFormDataFromObject } from "@/shared/lib";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allProducts: build.query<AllProductsDtoResponse, AllProductsDtoRequest>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["PRODUCTS_TAG"],
    }),

    productById: build.query<ProductByIdDtoResponse, ProductByIdDtoRequest>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    createProduct: build.mutation<CreateProductDtoResponse, CreateProductDtoRequest>({
      query: (body) => {
        const formData = new FormData()
        formData.append("file", body.img)
        // const formData = createFormDataFromObject(body)
        // console.log(body)
        for (const [key, value] of formData.entries()) {
          console.log(key, ':', value);
        }
        return {
          url: "/products",
          method: "POST",
          body: formData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      },
      invalidatesTags: ["PRODUCTS_TAG"],
    }),
    pathProductById: build.mutation<PathProductByIdDtoResponse, PathProductByIdDtoRequest>({
      query: ({ amount, description, name, price, id }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: { amount, description, name, price },
      }),
      invalidatesTags: ["PRODUCTS_TAG"],
    }),
    deleteProductById: build.mutation<DeleteProductByIdDtoResponse, DeleteProductByIdDtoRequest>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCTS_TAG"],
    }),
    updateProductProperty: build.mutation<
      UpdateProductPropertyDtoResponse,
      UpdateProductPropertyDtoRequest
    >({
      query: ({ productId, propertyId, value }) => ({
        url: `/products/updateProductProperty`,
        method: "PUT",
        body: { productId, propertyId, value },
      }),
    }),
  }),
});
export const {
  useAllProductsQuery,
  useCreateProductMutation,
  useDeleteProductByIdMutation,
  usePathProductByIdMutation,
  useProductByIdQuery,
  useUpdateProductPropertyMutation,
} = productApi;
