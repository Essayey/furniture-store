import { baseApi } from "@/shared/api";
import { AddProductToCartDtoRequest, AddProductToCartDtoResponse, ChangeCartProductQuantityDtoRequest, ChangeCartProductQuantityDtoResponse, DeleteProductFromCartDtoRequest, DeleteProductFromCartDtoResponse, GetCartByUserIdDtoRequest, GetCartByUserIdDtoResponse } from "./dto";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCartByUserId: build.query<GetCartByUserIdDtoResponse, GetCartByUserIdDtoRequest>({
            query: (body) => ({
                url: `/cart/${body.userId}`,
                method: "GET",
            }),
            providesTags: ["CARTS_TAG"],
        }),
        addProductToCart: build.mutation<AddProductToCartDtoResponse, AddProductToCartDtoRequest>({
            query: (body) => ({
                url: `/cart/${body.userId}/${body.productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["CARTS_TAG"],
        }),
        deleteProductFromCart: build.mutation<DeleteProductFromCartDtoResponse, DeleteProductFromCartDtoRequest>({
            query: (body) => ({
                url: `/cart/${body.userId}/${body.productId}`,
                method: "POST",
            }),
            invalidatesTags: ["CARTS_TAG"],
        }),
        changeCartProductQuantity: build.mutation<ChangeCartProductQuantityDtoResponse, ChangeCartProductQuantityDtoRequest>({
            query: (body) => ({
                url: `/cart/${body.userId}/${body.productId}/${body.quantity}`,
                method: "POST",
            }),
            invalidatesTags: ["CARTS_TAG"],
        }),
    })
})

export const {
    useGetCartByUserIdQuery,
    useAddProductToCartMutation,
    useDeleteProductFromCartMutation,
    useChangeCartProductQuantityMutation
} = cartApi