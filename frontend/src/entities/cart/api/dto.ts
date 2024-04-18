import { CartProduct } from "../types/types"

export type GetCartByUserIdDtoResponse = Array<CartProduct>

export type GetCartByUserIdDtoRequest = {
    userId: number
}

export type AddProductToCartDtoResponse = void

export type AddProductToCartDtoRequest = {
    userId: number
    productId: number
}

export type DeleteProductFromCartDtoResponse = void

export type DeleteProductFromCartDtoRequest = {
    userId: number
    productId: number
}


export type ChangeCartProductQuantityDtoResponse = void

export type ChangeCartProductQuantityDtoRequest = {
    userId: number
    productId: number
    quantity: number
}

